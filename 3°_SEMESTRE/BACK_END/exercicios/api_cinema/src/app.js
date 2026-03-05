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



//NOVO
app.get ('/filmes/:id', async (req,res) =>{ //coloca o async pra informar q é assíncrona, e q vai ter q esperar uma resposta alguma hr
//try é a estrututra de q vai dar certo (teste de validação) e catch coloca a mensagem de erro
    const {id} = req.params //recupera o id - PRECISA FAZER ISSO ANTES DE CODAR
    try {

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso:false,
                mensagem: 'ID de filme inválido'
            })
        }
 
       if(filme.length === 0 ){  //esse if direciona para o catch
        return res.status(404).json({
            sucesso: false,
            mensagem: 'Filme não encontrado'
        })
       }
        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
        res.json({
            sucesso: true,
            id: id,
            dados:filme,
        })
    } 
       
    catch (erro) { //trata erro de servidor, e não de busca, o erro de busca foi tratado lá na validação
        console.error ('Erro ao procuar filme', erro)
        res.status(500).json({
            sucesso:false,
            mensagem: 'Erro ao procurar filme',
            erro: erro.message
        })
    }

})

module.exports = app