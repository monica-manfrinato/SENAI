const mysql = require('mysql2') //mysql2 é focado em funções de callback que chamam funções de callback

require('dotenv').config()

// O Pool é uma biblioteca que cria uma conexão e permite q ela seja utilizada várias vezes
//Nessa const pool, vamos importar os dados que foram informados no .env
//Além disso, 
const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, //limite de quantidade de conexões
    queueLimit: 0 //deixa ilimitada a fila de espera pela conexão

})


module.exports = pool


//MODELO PROFESSOR

// const mysql = require('mysql2')

// require('dotenv').config()

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })

// module.exports = pool