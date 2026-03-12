const express = require('express')
const pool = require('./config/database') //para conseguir acessar o pool, que está dentro do database q está no config

const app = express()
app.use(express.json()) //faz o programa entender q as requisições trabalham com arquivos json

//atualização do código para desenvolver as funções de forma assíncronas (função assíncrona: faz a solicitaçao, espera receber a resposta e continua executando o código)

const queryAsync = (sql, values =[] ) => { //é genérico para poder ser utilizado por qualquer tipo de requisição, chamando a promessa toda vez somente pelo queryAsync
    return new Promise((resolve, reject) => {pool.query(sql, values, (err, results) => {
        if (err) reject (err)
        else resolve(results)
    })})}


//precisa ter o poolquery no promise, pq é ele q acessa o banco de dados, e esses dados da promessa serão vindos do banco
//constante responsável por linkar código JS com o banco
//Async determina q ela é assíncrona - await é usado quando quer q ela espere uma infromação específica, colocando o await na frente da linha - promise pega a informção do banco de dados

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUERIES CRUD --- FILMES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', (req,res) =>{ //teste padrão para saber se ta funcionando a comunicação
    res.send("API do cinema ta funcionando ")
})

// ANTIGO
// app.get ('/filmes', (req,res) =>{
//     pool.query('SELECT * FROM filme', (err, results) => //conectado com o banco, essa query vai listar os filmes, usando a query
//     {
//         res.json(results)
//     }) 
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUERIES GET --- FILME (VISUALIZA INFROMAÇÃO)

//NOVO
app.get ('/filmes', async (req,res) =>{ //coloca o async pra informar q é assíncrona, e q vai ter q esperar uma resposta alguma hr
//try é a estrututra de q vai dar certo (teste de validação) e catch coloca a mensagem de erro
    try {
        const filmes = await queryAsync('SELECT * FROM filme')
        res.json({
            sucesso: true,
            dados:filmes,
            total: filmes.length
        })
    } 
    catch (erro) {
        console.error ('Erro ao listar filmes', erro)
        res.status(500).json({
            sucesso:false,
            mensagem: 'Erro ao listar filmes',
            erro: erro.message
        })
    }
})


//ANTIGO
// app.get('/filmes/:id', (req,res) => {
//     const {id} = req.params

//     pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{ //quando cria a função, a 1° parte recebe o comando sql, a 2° pode ou não ter um valor e a 3° é a função de callback
//         res.json(results)
//     })
// })


//A função assíncrona é utilizada para esperar a resposta do banco de dados, que muitas vezes não é instantanea. Ele espera a resposta chegar a resposta do banco para realizar o restante do código. PARA A EXECUÇÃO ATÉ RECEBER ESSA RESPOSTA. APÓS RECEBER PODE CONTINUAR RODANDO O CÓDIGO
//NOVO
app.get ('/filmes/:id', async (req,res) =>{ //coloca o async pra informar q é assíncrona, e q vai ter q esperar uma resposta alguma hr
//try é a estrututra de q vai dar certo (teste de validação) e catch coloca a mensagem de erro
    const {id} = req.params //recupera o id - PRECISA FAZER ISSO ANTES DE CODAR
    try {  //VALIDAÇÃO DE CONTEÚDO (não encontrei esse usuário!)

        if(!id || isNaN(id)){ //validação dos dados e trazer do banco
            return res.status(400).json({
                sucesso:false,
                mensagem: 'ID de filme inválido'
            })
        }
 
        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
        res.json({
            sucesso: true,
            id: id,
            dados:filme,
            })


       if(filme.length === 0 ){  //esse if direciona para o catch
        return res.status(404).json({ //404: erro de busca, elemento não encontrado
            sucesso: false,
            mensagem: 'Filme não encontrado'
        })
       }

        } 
       
    catch (erro) { //trata erro de servidor, e não de busca, o erro de busca foi tratado lá na validação, VALIDAÇÃO DE CONEXÃO (erro de conexão com o servidor, tente novamente!)
        console.error ('Erro ao procuar filme:', erro)
        res.status(500).json({
            sucesso:false,
            mensagem: 'Erro ao procurar filme',
            erro: erro.message
        })
    }

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUERIES POST --- FILME (ADICIONA INFROMAÇÃO)

app.post ('/filmes', async (req,res) =>{ //res devolve informações para o front, e o req é para acessar informações do back
    try {
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body //requisição para cadastrar o novo filme
        if(!titulo || !genero || !duracao){ //coloca o ! na frente, pra ver se título é falso, ou seja, está ausente, e nesse caso como ele é not null, não pode ser vazio
            return res.status(400).json( //400: erro onde o servidor não concluí o processo por falta de informação

                { //mensagem que será enviada ao front-end quando ocorrer o erro
                    sucesso: false,
                    mensagem: 'Título, gênero e duração são obrigatórios!' //precisa validar no back também, pq não pode depender somente das validações do front, PRECISA SER FEITA A VALIDAÇÃO NOS DOIS!!!!
                }
            )
        }

        if (typeof duracao !== 'number' || duracao <= 0 ){ //garantir que o valor inserido é um número e que ele é maior que 0
            return(res.status(400).json({
                sucesso: false,
                mensagem: 'Duração deve ser um número positivo!'
            }))
        }

        const novoFilme = {
            titulo: titulo.trim(), //só usa titulo: titulo pq queremos modificar
            genero: genero.trim(),
            duracao, 
            classificacao: classificacao.trim() || null, 
            data_lancamento: data_lancamento || null

        }

        const resultado = await queryAsync('INSERT INTO filme SET ?', [novoFilme]) //faz toda a função do insert into, funcionando até melgor do que a versão utilizada anteriormente no MySQL, MAIS SIMPLES É MELHOR!!!
        res.status(201).json({ //criação concluída
            sucesso: true,
            mensagem: 'Filme cadastrado com sucesso!',
            id: resultado.insertId
        } )
    } 
    

    catch (erro) {
        console.error ('Erro ao salvar filme:', erro) //essa mensagem aparece no console
        res.status(500).json({ //status 500: erro do servidor
            sucesso:false,
            mensagem: 'Erro ao salvar filme.', //essa mensagem aparece para o usuário
            erro: erro.message
        })
    }

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUERIES PUT --- FILME (EDITANDO INFROMAÇÃO)

app.put ('/filmes/:id', async (req,res) =>{
    const {id} = req.params
    const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

    try {
        //ESSA VALIDAÇÃO DE ID VAI SE REPETIR EM TODAS AS VEZES QUE PRECISAR VALIDAR O ID (:ID) ENTÃO PODE SÓ COPIAR E COLAR DOQ JÁ EXISTE

        if(!id || isNaN(id)){ //validação dos dados e trazer do banco
            return res.status(400).json({
                sucesso:false,
                mensagem: 'ID de filme inválido'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

       if(filmeExiste.length === 0 ){  //esse vai confirmar se o filme existe (nesse caso, se ele não existir)e exibe o erro
        return res.status(404).json({ //404: erro de busca, elemento não encontrado
            sucesso: false,
            mensagem: 'Filme não encontrado'
        })
       }

       const filmeAtualizado = {}
        if(titulo !== undefined) filmeAtualizado.titulo = titulo.trim() //se o título não estiver vazio, ou seja, uma alteração foi feita, vai pegar o valor infromado no 'filmeAtualizado' e vai inserir no campo respectivo no banco
        if(genero !== undefined) filmeAtualizado.genero = genero.trim()
        if(duracao !== undefined){ //verifricação de se a duração está como número e um valor positivo
            if(typeof duracao !== 'number' || duracao <= 0 ){
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Duração deve ser um número positivo'
                })
            }
            filmeAtualizado.duracao = duracao

        } 
        
        if(classificacao !== undefined) filmeAtualizado.classificacao = classificacao
        if (data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento

        if (Object.keys(filmeAtualizado).length === 0 )//função object faz uma análise dos objetos, e entre parenteses coloca o objeto a ser atualizado
            {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Nenhum campo para atualizar'
                })
            }

        await queryAsync('UPDATE filme SET ? WHERE id = ?', [filmeAtualizado, id]) //aqui usa duas variáveis para realizar a edição, quais são as infromações e qual o id do filme que deverá ser atualizado, então coloca os dois dentro do []
        res.json({
            sucesso: true,
            mensagem: 'Atualização feita com sucesso!'
        })
    } 


    catch (erro) {
        console.error ('Erro ao atualizar filme:', erro) //essa mensagem aparece no console
        res.status(500).json({ //status 500: erro do servidor
            sucesso:false,
            mensagem: 'Erro ao atualizar filme.', //essa mensagem aparece para o usuário
            erro: erro.message
        })
                
    }
 })



// app.put('/filmes/:id', async (req,res) =>{
//     try {
//         const {id} = req.params
//         const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

//         if(!id || isNaN(id)){
//             return res.status(400).json({
//                 sucesso: false,
//                 mensagem: 'ID filme inválido.'
//             })
//         }

//         const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
//         if(filmeExiste.length === 0){
//             return res.status(404).json({
//                 sucesso: false,
//                 mensagem: 'Filme não encontrado.'
//             })
//         }

//         const filmeAtualizado = {}

//         if(titulo !== undefined) filmeAtualizado.titulo = titulo.trim()
//         if(genero !== undefined) filmeAtualizado.genero = genero.trim()
//         if(duracao !== undefined){
//             if(typeof duracao !== 'number' || duracao <= 0){
//                 return res.status(400).json({
//                     sucesso: false,
//                     mensagem: 'Duracao deve ser um número positivo.'
//                 })
//             }
//             filmeAtualizado.duracao = duracao
//         }
//         if(classificacao !== undefined) filmeAtualizado.classificacao = classificacao
//         if(data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento

//         if(Object.keys(filmeAtualizado).length === 0){
//             return res.status(400).json({
//                 sucesso: false,
//                 mensagem: 'Nenhum campo para atualizar'
//             })
//         }

//         await queryAsync('UPDATE filme SET ? WHERE id = ?',[filmeAtualizado, id])
//         res.json({
//             sucesso: true,
//             mensagem: 'Filme atualizado.'
//         })

//     } catch (erro) {
//         console.error('Erro ao atualizar filme:', erro)
//         res.status(500).json({
//             sucesso: false,
//             mensagem: 'Erro ao atualizar filme.',
//             erro: erro.message
//         })
       
//     }
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUERIES DELETE --- FILME (EXCLUINDO O OBJETO)

app.delete('/filmes/:id', async (req, res) =>{

    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID filme inválido.'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
        if(filmeExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado.'
            })
        }

        await queryAsync('DELETE FROM filme WHERE id = ?', [id])
        res.status(200).json({
            sucesso: true,
            mensagem: 'Filme apagado'
        })
    
} 

catch (erro) {
    console.error('Erro ao apagar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar filme.',
            erro: erro.message
        })
}



})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUERIES CRUD --- SALAS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



module.exports = app