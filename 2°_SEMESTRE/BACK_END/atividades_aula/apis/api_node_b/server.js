import express from 'express'
const app = express()
const users = ['oiii']
app.use(express.json()) //indica que vai precisar interpretar

//GET /////////////////////////////////////////////////////////////////////////////////////

app.get('/usuarios', (req,res) => { 

res.status(200).json(users) // vai dar uma resposta (res) no formato json e essa resposta vai ser RESGATADA no array users 
//o '/usuarios' representa o caminho que precisa ser percorrido para chegar à resposta 
}) 



//POST /////////////////////////////////////////////////////////////////////////////////////

app.post('/usuarios', (req, res) => { 

users.push(req.body) //vai salvar essas informações no array users que criamos anteriormente, usando .push pq é o comando para adicionar na lista 
//coloca o 'body' pq é onde as informações ficam, ou seja, queremos receber somente o conteúdo 

res.status(201).json(req.body) //o post da a resposta do que ele está colocando no array, vai mostrar o json, a informação que foi requisitada
})

app.listen(3000, () => console.log('Servidor rodando'))
