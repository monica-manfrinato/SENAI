//EXERCÍCIO FUNÇÃO DECLARADA COM SOMA

// function soma (a,b)
// {return a+b}
// console.log(`O resultado da soma é ${soma(10,35)}`)



//EXERCÍCIO FUNÇÃO DECLARADA COM MÉDIA

// function media (a,b,c)
// {return (a+b+c)/3}
// console.log(`O resultado da soma é ${media(10,10, 10)}`)



////EXERCÍCIO FUNÇÃO EXPRESSA COM ÁREA DO RETÂNGULO

// const area = function(a,b){return (a*b)/2}
// area_triangulo = area(4,8)
// console.log (`A área desse triâgulo é de: ${area_triangulo}`)



//EXERCÍCIO FUNÇÃO ANÔNIMA COM PAR E ÍMPAR

// const valor = function(a){return (a)}
// numero = valor(9)
// if (valor%2 == 0 )
//     { console.log (`O número ${numero} é par!`)
// }
// else{ console.log (`O número ${numero} é ímpar`)}



// EXERCÍCIO ARROW FUNCTION COM MAIOR NÚMERO

// let maiorMenor = (a,b) => {
//     if (a >b){return"O primeiro valor é o maior!"}
//     else{return"O segundo valor é o maior!"}}

// console.log(maiorMenor(3,5))



// EXERCÍCIO ARROW FUNCTION COM ARRAY E RETORNO DE NÚMEROS PARES

// let array = (lista) => {
//    for (let i = 0; i < lista.length; i++){
//     if (lista[i]%2 == 0 ){
//     console.log(lista[i])
//     }  
// }}
// array([0,1,2,3,4,5,6,7,8,9,10])


//EXERCÍCIO FUNÇÃO IIFE COM MENSAGEM NO CONSOLE

// (function(){
//     return console.log('Oii esse foi fácil ;)')
// }) ()


//EXERCÍCIO FUNÇÃO IIFE COM QUADRADO DE UM NÚMERO E EXIBIR ELE NO CONSOLE

// (function(){
//     let valor = 5
//     return console.log(`O quadrado do número ${valor} é ${valor*valor}`)
// }) ()


//EXERCÍCIO FUNÇÃO CALLBACK, COM BOAS-VINDAS PERSONALIZADA


// function boasVindas(callback){
//     return callback()
// }

// function mensagem (){
//     console.log("Seja muito bem vindo!!")
// }

// boasVindas(mensagem)




// EXERCÍCIO FUNÇÃO CALLBACK COM ARRAY DE NÚMEROS E FUNÇÃO CALLBACK

// let lista = [1,2,3,4,5]

// let dobro = (lista) => {console.log(lista*2)}

// function executarCallback(lista, callback){
//     callback(lista)
// }

// for (let i = 0; i < lista.length; i++){
//     executarCallback(lista[i], dobro)
// }


// EXEMPLO PROFESSOR

// function dobro(numero){
//     return numero*2
// }

// function aplicarCallback(array, callback){
//     let listaDobro = []
//     for (let i = 0; i < array.length; i++){
//         listaDobro.push(callback(array[i]))
//     }
//     return listaDobro
// }

// console.log(aplicarCallback([2,4,6,8,10],dobro))



// EXERCÍCIO FUNÇÃO RECURSIVA COM 1 AO 10 EM ORDEM DECRESCENTE

// function repeticao(n){
// if (n === 1){
//     return 1
// } else {
//     console.log(n)
//     return repeticao(n-1)
// }
// }
// console.log(repeticao(10))


//EXERCÍCIO FUNÇÃO ASSÍNCRONA AGUARDA 2 SEGUNDOS E EXIBE . NO CONSOLE

// async function aguardarSegundos(){
//     console.log("Aguardando dois segundos...")
//     setTimeout(() => {console.log("Executado após 2 segundos!")}, 2000)
// }

// aguardarSegundos()



//EXERCÍCIO FUNÇÃO ASSÍNCRONA RECEBE NÚMERO, AGUARDA UM SEGUNDO E RETORNA O SEU DOBRO

// async function dobroNumero(){
//     valor = 6
//     console.log("Aguardando um segundo...")
//     setTimeout(() => {console.log(`O dobro do número ${valor} é: ${valor*2}`)}, 1000)
// }

// dobroNumero()


//EXERCÍCIO FUNÇÃO ASSÍNCRONA SIMULANDO A CONSULTA DE UM USUÁRIO E AGUARDE 3 SEGUNDOS

// async function consultaUsuario(){
//     console.log("Aguardando três segundos...")
//     setTimeout(() => {console.log("Após três segundos...")}, 3000)
// }

// consultaUsuario()



