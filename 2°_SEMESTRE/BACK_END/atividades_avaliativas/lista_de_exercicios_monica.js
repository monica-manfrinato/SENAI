//EXERCÍCIO SOMA DE DOIS NÚMEROS

// let num1 = 12
// let num2 = 8

// console.log(num1 + num2)



//EXERCÍCIO ÁREA DO RETÂNGULO

// let base = 4
// let altura = 10

// console.log(base*altura)



//EXERCÍCIO CELSIUS PARA FAHRENHEIT

// let valor_c = 40 //VALOR EM CELSIUS
// let valor_f = (valor_c * 9/5) +32 //VALOR EM FAHRENHEIT
// console.log(valor_f)



//EXERCÍCIO MÉDIA DE TRÊS NÚMEROS

// let num1 = 4
// let num2 = 6
// let num3 = 8

// let media = ((num1+num2+num3)/3)
// console.log(media)


//EXERCÍCIO MULTIPLICAÇÃO DE DOIS NÚMEROS

// let num1 = 5
// let num2 = 7
// let mult = num1*num2
// console.log("O resultado da multiplicação entre 7 e 5 é:", mult)



//EXERCÍCIO VERIFICANDO SE UM NÚMERO É POSITIVO, NEGATIVO OU ZERO

// let num = 4000000

// if (num == 0){
//     console.log("Você colocou o número 0!")
// }
// else if (num < 0){
//     console.log("O número é negativo!")
// }
// else{
//     console.log("O número é positivo!")
// }




//EXERCÍCIO PARA DETERMINAR SE É MENOR OU MAIOR DE IDADE

// let idade = 18

// if (idade < 18){
//     console.log("Você é menor de idade!")
// }
// else{
//     console.log("Você é maior de idade!")
// }



//EXERCÍCIO VERIFICANDO SE O NÚMERO É PAR OU ÍMPAR

// let num = 4

// if (num%2 == 0){
// console.log("O número é par!")
// }
// else{
//      console.log("O número é ímpar!")
// }


//EXERCÍCIO MÉDIA DO ALUNO

// let media1 = 10
// let media2 = 5

// media = (media1 + media2)/2

// if (media >= 7){
//     console.log("Você foi aprovado!")
// }
// else {
// console.log ("Você foi reprovado!")
// }



//EXERCÍCIO MOSTRAR O MAIOR NÚMERO

// let num1 = 2
// let num2 = 15
// let num3 = 10

// if (num1 > num2 && num1 > num3){
//     console.log(" O primeiro número é o maior")
// }
// else if (num2 > num1 && num2 > num3){
//     console.log ("O segundo número é o maior")
// }

// else{
//     console.log("O terceiro número é o maior")
// }





//EXERCÍCIO CLASSIFICAÇÃO DE IDADES

// let idade = 70

// if (idade < 12 && idade >0){
//     console.log("Você é uma criança!")
// }
// else if (idade >= 12 && idade <= 17){
//     console.log("Você é um adolescente!")
// }
// else if (idade >=18 && idade <= 59){
//     console.log("Você é adulto!")
// }
// else if (idade >= 60){
//     console.log("Você é um idoso!")
// }
// else{
//     console.log("Erro! Insira uma idade válida.")
// }




//EXERCÍCIO ANO BISSEXTO


// let ano = 2024

// if (ano%4 == 0 && ano%100 != 0 || ano%400 == 0){
//     console.log("Esse ano é um ano bissexto!")
// }
// else{
//     console.log("Que pena! Esse não é um ano bissexto...")
// }




//EXERCÍCIO MENU DE OPERAÇÕES MATEMÁTICAS

// let operacoes = "*"
// let num1 = 5
// let num2 = 4

// switch (operacoes){
//     case "+":
//     console.log(`O resultado da soma foi: ${num1 + num2}`)
//         break
//     case "*":
//     console.log(`O resultado da multiplicação foi: ${num1*num2}`)
//         break
//     case "-":
//     console.log(`O resultado da subtração foi: ${num1 - num2}`)
//         break
//     case "/":
//     console.log(`O resultado da divisão foi: ${num1/num2}`)
//         break
//     default:
//         console.log("Escolha uma operação")
// }




//EXERCÍCIO DIA DA SEMANA COM SWITCH


// let dia = 5

// switch (dia){
//     case 1:
//     console.log("Hoje é uma segunda")
//         break
//     case 2:
//     console.log("Hoje é uma terça")
//         break
//     case 3:
//     console.log("Hoje é uma quarta")
//         break
//     case 4:
//     console.log("Hoje é uma quinta")
//         break
//     case 5:
//     console.log("Hoje é uma sexta")
//         break
//     case 6:
//     console.log("Hoje é uma sábado")
//         break
//     case 7:
//     console.log("Hoje é uma domingo")
//         break
//     default:
//         console.log("Escolha um dia!")
// }




//EXERCÍCIO NOTA NUMÉRICA PARA CONCEITO

// let nota = 4

// switch (true){
//     case nota == 10 || nota == 9:
//     console.log("Você tirou uma nota A!")
//         break
//     case nota == 8 || nota == 7:
//     console.log("Você tirou uma nota B!")
//         break
//     case nota == 6 || nota == 5:
//     console.log("Você tirou uma nota C!")
//         break
//     case nota == 4 || nota == 3:
//     console.log("Você tirou uma nota D!")
//         break
//     case nota == 2 || nota == 1:
//     console.log("Você tirou uma nota E!")
//         break
//     case 0:
//     console.log("Você tirou uma nota F!")
//         break
//     default:
//         console.log("Insira uma nota válida")
// }





//EXERCÍCIO EXIBIR NÚMEROS DE 1 A 10

// for (let i = 1; i <=10; i++){
//     console.log(i)
// }




//EXERCÍCIO SOMA DOS NÚMEROS DE 1 A 100


// let soma = 0
// for (let i = 0; i <= 100; i++){
//     soma += i
// }
// console.log(soma)





//EXERCÍCIO MOSTRAR TABUADA DO NÚMERO DIGITADO

// num = 5

// for (let i = 0; i <= 10; i++){
//     console.log(i,"x", num, "=",i*num)
// }





//EXERCÍCIO CONTADOR 10 A 1 COM WHILE


// let contador = 10
// while (contador != 0){
//     console.log(contador)
//     contador--
// }




//EXERCÍCIO EXIBIR NÚMEROS PARES DE 1 A 50

// for (let i = 1; i <= 50; i++){
//     if (i%2 == 0 ){
//     console.log(i)
//     } 
// }




// EXERCÍCIO FATORIAL

// let num = 5
// let fatorial = 1

// for (let i = num; i >= 1; i--) {
//     fatorial *= i
// }
// console.log(`O fatorial de ${num} é ${fatorial}`)





// EXERCÍCIO ARRAY COM 5 NOMES

// let nomes = ["Mônica", "Lucas", "Maria", "Vinícius", "Luiz"]

// for (let i = 0; i <= 4; i++){
//     console.log(nomes[i])
// }





// EXERCÍCIO MOSTRAR APENAS OS PARES

// let numeros = [0,1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i <= 10; i++){
//     if (i%2 == 0 ){
//     console.log(i)
//     } 
// }




// EXERCÍCIO SOMAR TODOS OS NÚMEROS DO ARRAY

// let numeros = [0,1,2,3,4,5,6,7,8,9,10]
// let soma = 0
// for (let i = 0; i <= 10; i++){
//     soma += i
//     } 
// console.log(soma)




//EXERCÍCIO ENCONTRAR O MAIOR VALOR DO ARRAY

// let numeros = [0,1,2,3,4,5,16,7,8,9,10]
// let maior_valor = numeros[0]
// for (let i = 0; i <= 10; i++){
//     if (numeros[i] > maior_valor){
//         maior_valor = numeros[i]
//     }
//     } 
// console.log(maior_valor)




//EXERCÍCIO VERIFICAR SE UM ELEMENTO EXISTE NO ARRAY

// let objetos = ["cadeira", "mesa", "borracha", "computador", "carregador", "apagador"]
// console.log(objetos.includes("mesa"))




//EXERCÍCIO ADICIONAR ELEMENTO AO FINAL DO ARRAY

// let objetos = ["cadeira", "mesa", "borracha", "computador", "carregador", "apagador"]
// objetos.push("mochila")
// for (let i = 0; i < objetos.length; i++){
// console.log(objetos[i])}




//EXERCÍCIO REMOVER ELEMENTO DO FINAL DO ARRAY

// let objetos = ["cadeira", "mesa", "borracha", "computador", "carregador", "apagador"]
// objetos.pop()
// for (let i = 0; i < objetos.length; i++){
// console.log(objetos[i])}
