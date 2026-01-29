// TESTE DO VAR

//var nome = "joao";
// var nome = "maria";
// console.log(nome); // Output: maria
// var nome = "pedro";
// console.log(nome); // Output: pedro






// TESTE DO LET

// let idade = 20;
// idade = 30;
// console.log(idade); // Output: 30






// TESTE DO CONST

// const pi = 3.14;
// console.log(pi); // Output: 3.14
// pi = 3.14159; // Isso causaria um erro, pois não podemos reatribuir uma constante






// TESTE DO camelCase

// let nomeCompleto = "Celso Rodrigo Giusti";
// console.log(nomeCompleto);





//TIPOS DE DADOS

// let nome = "Celso"; // String
// let idade = 20; // Number
// let altura = 1.75; // Number (float)
// let isEstudante = true; // Boolean
// let endereco = null;    // Null
// let telefone; // Undefined

// console.log(typeof nome); // Output: string
// console.log(typeof idade);  // Output: number
// console.log(typeof altura); // Output: number
// console.log(typeof isEstudante); // Output: boolean
// console.log(typeof endereco); // Output: object (null é considerado um objeto em JavaScript)
// console.log(typeof telefone); // Output: undefined







//USO DE LISTAS E OBJETOS, MOSTRANDO COMO ACESSAR UM VALOR SÓ 

// let lista = ['maçã', 'banana', 'laranja'];
// let pessoa = {nome: 'Celso', idade: 20};

// console.log(lista[0]); // Output: ['maçã']
// console.log(pessoa.nome, pessoa.idade); // para exibir o nome e a idade do objeto pessoa, colocma-se um ponto entre o nome do objeto e o atributo que se quer acessar. Output: Celso 20
// console.log(pessoa); // Output: { nome: 'Celso', idade: 20 }






//USO DA FUNÇÃO SAUDAÇÃO

// function saudacao(nome)
//  { 
//      return `Olá, ${nome}!`; 
//  } 
//  console.log(saudacao('Celso')); // Output: Olá, ${nome}!





//USO DE IF E ELSE

// let idade = 18;

// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.");
// }






//USO DO IF, ELSE IF E ELSE

// let nota = 70;

// if (nota >= 90) {
//     console.log("Aprovado com A");
// }else if (nota >= 80) {
//     console.log("Aprovado com B");
// }else if (nota >= 70) {
//     console.log("Aprovado com C");
// } else {
//     console.log("Reprovado");
// }





// OPERADOR TERNÁRIO

// let idade = 13;
// let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// console.log(resultado); // Output: Menor de idade





//SWITCH CASE

// let dia = 3; 

 

// switch (dia){ 
// case 1:  
//     console.log("Segunda"); 
//     break 
// case 2: 
//     console.log("Terça"); 
//     break 
// default: 
//     console.log("Outro dia"); 
// }




//FOR

// for (let i = 0; i < 5; i++) 
// {
//     console.log(i);
// }

// let nome = ["Celso", "Daniel", "Marlon"]
// for (let i = 0; i< 3; i++){
//     console.log(nome[i]);
// }




//FOREACH

// let = numeros = [1,2,3];
// numeros.forEach(num => console.log(num));


// let = contador = 0
// while (contador < 3){
//     console.log(contador);
//     contador++
// }


//EXEMPLO DO WHILE

// let num = 5;
// do {
//     console.log(num);
//     num++
// } while (num <3)


//EXEMPLO COMANDOS ARRAY

// let lista = ["banana", "maçã", "laranja"]
// console.log(lista[0]) //banana

// lista.push("Uva") //Adiciona ao final
// lista.pop() // Remova o último
// lista.unshift("Manga") //Adiciona no início
// lista.shift() // Remove do inicio

// console.log(lista.includes("Maçã")) //true
// console.log(lista.indexOf("Laranja")) //2
// console.log(lista.length) //tamanho array
