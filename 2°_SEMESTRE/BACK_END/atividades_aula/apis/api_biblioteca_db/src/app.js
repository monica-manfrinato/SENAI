import express from 'express'
 const app = express()
 app.use(express.json())

 const livros = [
    {
        isbn:1,
        titulo_livro: 'Leticinha - Como não chorar',
        editora: 'Arqueiro',
        ano_publicacao: '2024',
        autor:'Leticinha Robertinha'
    },

    {
        isbn: 2,
        titulo_livro: 'Paulinha - Como não pular',
        editora: 'Arqueiro',
        ano_publicacao: '2025',
        autor:'Paulete pvd'
    }

 ]

 //função para encontrar qual é o isbn que quero utilizar
 function buscarLivro  (isbn){
    return livros.findIndex(livro => { return livro.isbn === Number(isbn)})
 }

 app.get('/', (req,res) => {
    res.status(200).send ("Biblioteca Saber e Cia")
    res.json()
 })

  app.get('/livros', (req,res) => {
    res.status(200).json(livros)})

  app.get('/livros/:isbn', (req,res) => { //O app.get entende que no lugar de :isbn vai ter uma informação, transforma em variável    
   const index = buscarLivro(req.params.isbn) //aqui armazenamos o valor do índice dentro
    res.status(200).json(livros[index]) //vai devolver somente o objeto que foi editado

})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put('/livros/:isbn', (req,res)=> {

    const index = buscarLivro(req.params.isbn) //aqui armazenamos o valor do índice dentro dessa constante
    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index]) //vai devolver somente o objeto que foi editado

})


app.delete('/livros/:isbn', (req,res) => {
    const index = buscarLivro(req.params.isbn)
    livros.splice(index, 1)
    res.status(200).json(livros)
})
 export default app
