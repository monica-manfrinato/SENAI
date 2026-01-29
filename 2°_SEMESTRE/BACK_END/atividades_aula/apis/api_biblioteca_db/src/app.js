import express from 'express'
 const app = express()
 app.use(express.json())
import conectaDB from './config/dbConnect.js'

import livro from './model/Livro.js'
import autor from './model/Autor.js'
import autorLivro from './model/Autor_Livro.js'
import membro from './model/Membro.js'
import exemplar from './model/Exemplar.js'
import emprestimo from './model/Emprestimo.js'

const conexao = await conectaDB()

conexao.on("error", (erro)=> {  //verificar se a conexão foi possível
    console.erro("Erro de Conexão", erro)
})

conexao.once("open",() => { //verifica se a conexão está ativa (aberta)
    console.log("Conexão realizada!")
})

 app.get('/', async(req,res) => {
    const listarLivros = await livro.find({})
    res.status(200).json(listarLivros)
 })

  app.get('/livros', (req,res) => {
    res.status(200).json(livros)})

  app.get('/livros/:id', async (req,res) => { //O app.get entende que no lugar de :isbn vai ter uma informação, transforma em variável
    const id = req.params.id
    const livroSelecionado = await livro.findById(id)
    res.status(200).json(livroSelecionado) 
   const index = buscarLivro(req.params.id) //aqui armazenamos o valor do índice dentro
    res.status(200).json(livros[index]) //vai devolver somente o objeto que foi editado

})

app.post('/livros', async (req, res) => {
    const novoLivro = await livro.create(req.body)
    res.status(201).json({message:"Livro Cadastrado", livro:novoLivro})
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



 /////////////////////////////////////////////////////////////////////////////////////////////////////////

  app.get('/', async(req,res) => {
    const listarLivros = await livro.find({})
    res.status(200).json(listarLivros)
 })

  app.get('/livros', (req,res) => {
    res.status(200).json(livros)})

  app.get('/livros/:id', async (req,res) => { //O app.get entende que no lugar de :isbn vai ter uma informação, transforma em variável
    const id = req.params.id
    const livroSelecionado = await livro.findById(id)
    res.status(200).json(livroSelecionado) 
   const index = buscarLivro(req.params.id) //aqui armazenamos o valor do índice dentro
    res.status(200).json(livros[index]) //vai devolver somente o objeto que foi editado

})

app.post('/livros', async (req, res) => {
    const novoLivro = await livro.create(req.body)
    res.status(201).json({message:"Livro Cadastrado", livro:novoLivro})
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