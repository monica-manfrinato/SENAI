const pool = require('./config/database')
const app = require('./app')
const PORT = 3000

pool.getConnection((err, conection)=> {
    if(err){
        console.error('Erro ao conectat ao banco:', err) //mesma função do console.log mas é mais específico para quando trabalho com erro, mensagem + detalhada
        process.exit(1)
    }
        console.log('💥 Conectado ao MySQL 💥') //não precisa de else pq o process.exit encerra a função, encerra ela, ent ignora esse console aq 
        conection.release()
})

app.listen(PORT, () =>{
    console.log('🌟 Servidor Rodando! 🌟')
})

