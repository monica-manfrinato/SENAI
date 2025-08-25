//FUNÇÃO DEFINIDA

// console.log(`O resultado da soma é ${soma(5,5)}`)
// function soma (a,b){return a+b}



//FUNÇÃO EXPRESSAS OU ANÔNIMAS

// const soma = function(a,b){return a+b}
// result = soma(4,4)
// console.log (`O resultado da soma é: ${result}`)



//ARROW FUNCTION 

// let soma = (a,b) => {return a + b}
// console.log(`O resultado da soma é: ${soma(7,7)}`)



//ARROW IMEDIATAS IIFE

// (function(){
//     return console.log('Hello World')
// }) ()



//FUNÇÃO CALLBACK EX.1

// function executarCallback(callback){
//     callback()
// }
// executarCallback(() => {console.log("Callback executado")})



//FUNÇÃO CALLBACK EX.2

// function executarOperacao(a,b,callback){
//     return callback(a,b,)
// }

// function soma (x,y){
//     return x + y
// }

// function multiplica (x,y){
//     return x*y
// }

// console.log(executarOperacao(2,3,soma)) //5
// console.log(executarOperacao(2,3,multiplica)) //6



//FUNÇÃO RECURSIVA


// function fatorial(n){
// if (n === 0 || n ===1){
//     return 1
// } else {
//     return n*fatorial(n-1)
// }
// }
// console.log(fatorial(4))



//FUNÇÃO ASYNC

async function buscarDados(){
    console.log("Iniciando a busca")

    const resposta = await fetch("https://viacep.com.br/ws/13323110/json/")
    const dados = await resposta.json()

    console.log("Dados recebidos:", dados)
}

buscarDados()
console.log("Essa mensagem aparece antes da resposta da API!")