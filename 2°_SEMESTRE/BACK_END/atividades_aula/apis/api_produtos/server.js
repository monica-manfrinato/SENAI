 import express from 'express'
const produto = express()
produto.listen(3333, () => console.log('Servidor rodando'))

const produtos = ["Arroz", "Feijão", "Batata", "Macarrão"]
produto.use(express.json()) 


produto.get('/produtos', (req,res) => {

    res.status(200).json(produtos)
})


produto.post('/produtos', (req,res) => {
    produtos.push(req.body)
    res.status(201).json(req.body)
})