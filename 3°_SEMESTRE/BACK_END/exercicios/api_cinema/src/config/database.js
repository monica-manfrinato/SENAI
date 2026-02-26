const mysql = require('mysql2')

require('dotenv').config()

// O Pool é uma biblioteca que cria uma conexão e permite q ela seja utilizada várias vezes
//Nessa const pool, vamos importar os dados que foram informados no .env
//Além disso, 
const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    databse: process.env.DB_NAME,
    porta: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, //limite de quantidade de conexões
    queueLimit: 0 //deixa ilimitada a fila de espera pela conexão

})


module.exports = pool

