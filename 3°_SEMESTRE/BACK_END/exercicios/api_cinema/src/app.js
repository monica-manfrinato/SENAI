const express = require('express')
const pool = require('./config/database') //para conseguir acessar o pool, que está dentro do database q está no config

const app = express()
app.use(express.json()) //faz o programa entender q as requisições trabalham com arquivos json

app.get('/', (req,res) =>{ //teste padrão para saber se ta funcionando a comunicação
    res.send("API do cinema ta funcionando ")
})

app.get ('/filmes', (req,res) =>{
    pool.query('SELECT * FROM filme', (err, results) => //conectado com o banco, essa query vai listar os filmes, usando a query
    {
        res.json(results)
    }) 
})