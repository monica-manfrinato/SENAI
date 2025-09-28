//Parte 1: Funções//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 1: Crie uma função que receba uma string e retorne a quantidade de vogais presentes.

function contagemVogais (palavra) {
    let quantVogais = 0
    const vogais = "aAeEiIoOuUáàâãÁÀÂÃéèêÉÈÊíìîÍÌÎóòôõÓÒÔÕúùûÚÙÛ"
    let quantLetras = palavra.length
    for (let i = 0; i < palavra.length; i++){
        if (vogais.includes(palavra[i]))
            quantVogais++
    }

    return quantVogais
}

const palavra = "Açúcar";
const quantLetras = palavra.length;
const quantVogais = contagemVogais(palavra)

console.log(`A palavra ${palavra} possuí ${quantLetras} letras, sendo ${quantVogais} vogais!`)

// Exercício 2: Implemente uma função que receba um número e retorne a sequência de Fibonacci até esse número.

function sequenciaFibonacci (valorFinal) {
if (valorFinal == 0){
    return [0];
    }
if (valorFinal == 1){
    return [0, 1];
    }

let lista = [0,1]
    for (i = 2; i <= valorFinal; i++) {
        lista[i] = lista[i - 1]  + lista[i - 2]
    }
return lista

}

const valorFinal = 8;
const resultado = sequenciaFibonacci(valorFinal)
console.log(`Segundo a sequência de Fibonacci, o valor de ${valorFinal} posições teve resultado de ${resultado}`) //retorna 9 posições pq seria de 0 a 8, ou seja, 9 elementos

// Exercício 3: Crie uma função que receba um array de números e retorne apenas os números primos.

// Exercício 4: Escreva uma função que receba uma string e retorne se ela é um palíndromo (mesmo de trás para frente).



//Parte 2: Classes simples//////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 5: Crie uma classe Produto com atributos nome, preco e estoque. Adicione um método vender(quantidade) que diminui o estoque.

class Produto{
  constructor(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
  }

  vender(quantidade){

    if (quantidade === 0){
      console.log(`Nao foi possível realizar a venda, estoque ${this.nome} está zerado!`)
    }
    else if(quantidade > this.estoque){
      console.log(`Não foi possível realizar a venda, o estoque de ${this.nome} tem apenas ${this.estoque} itens!`)
    }
    else{
    this.estoque = this.estoque - quantidade
    console.log(`Após a venda, restaram ${this.estoque} unidades de ${this.nome} no estoque.`)
    
    }
  }
}

const arroz = new Produto ("arroz", 12.50, 40)
arroz.vender(50)

// Exercício 6: Crie uma classe ContaEnergia que recebe consumoKwh e valorPorKwh. Adicione um método que calcula o valor total da conta.

class ContaEnergia{
  constructor(consumoKwh, valorPorKwh){
  this.consumoKwh = consumoKwh
  this.valorPorKwh = valorPorKwh
  }
  
  valorConta(){
    if(this.consumoKwh <= 0 || this.valorPorKwh <= 0 ){
      console.log("Insira valores válidos!")

    }
    else{
    let valorTotal = this.consumoKwh*this.valorPorKwh
    console.log(`O valor final da conta foi de ${valorTotal} reais!`)
    }
    
  }
  
}

const contaMonica = new ContaEnergia(40, 0.70)
contaMonica.valorConta()

// Exercício 7: Crie uma classe Aluno com notas de 3 provas. Adicione um método media() que calcula a média e outro aprovado() que retorna se a média é maior ou igual a 7.

class Aluno{
  constructor(nota1, nota2, nota3){
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3
  }
  
  media(){
    if(this.nota1 < 0 ||this.nota2 < 0 || this.nota3 < 0 ){
      console.log("Insira uma nota válida!")
      }
      
    else{
      let media = (this.nota1 + this.nota2 + this.nota3)/3
      console.log(`A média desse aluno foi ${media}.`)
    }
    }
  }
  
const monica = new Aluno(10, 9, 8)
monica.media()

// Exercício 8: Crie uma classe Cinema que tem nome, capacidade e ingressosVendidos. Adicione um método venderIngresso(qtd) que só permite vender se houver lugares disponíveis.



// Exercício 9: Crie uma classe Biblioteca que armazena uma lista de livros. Adicione métodos adicionarLivro, removerLivro e listarLivros



//Parte 3: Encapsulamento///////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 10: Crie uma classe Cofrinho que armazena valores de moedas e notas em um atributo privado. Adicione métodos depositar(valor), retirar(valor) e saldo().

// Exercício 11: Crie uma classe Banco que possua contas privadas. Cada conta deve ter número, titular e saldo. Adicione métodos abrirConta(titular, saldoInicial), consultarSaldo(numeroConta) e transferir(contaOrigem, contaDestino, valor).

// Exercício 12: Crie uma classe Pedido que armazena uma lista privada de itens (nome do produto e valor). Adicione métodos adicionarItem, removerItem e calcularTotal.

// Exercício 13: Crie uma classe UsuarioSistema com atributos privados login e senha. Adicione métodos autenticar(login, senha) e alterarSenha(senhaAntiga, senhaNova).



//Parte 4: Herança//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercício 14: Crie uma classe Funcionario com atributos nome e salarioBase. Depois crie subclasses:
// - FuncionarioCLT (desconta 10% de imposto do salário + 5% de comissão).
// - FuncionarioPJ (sem desconto).
// - Estagiario (desconta 5% de vale transporte).
// Implemente o método calcularSalarioLiquido() em cada subclasse.

// Exercício 15: Crie uma classe Investimento com um método calcularRendimento(valor, meses).Depois crie subclasses:
// - RendaFixa (rende 0,7% ao mês).
// - CDB (rende 1% ao mês, mas cobra 15% de imposto sobre o lucro).
// - Acao (rende valores aleatórios entre -5% e +10% ao mês).
// Implemente o cálculo mês a mês.




//Parte 5: Polimorfismo/////////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 16: Crie uma classe Imposto com método calcular(valor).Depois crie subclasses:
// - ICMS (18% sobre o valor).
// - ISS (5% sobre o valor).
// - IRPF (progressivo: até 2000 = isento, de 2001 até 5000 = 15%, acima de 5000 = 27,5%).
// Implemente um sistema que receba uma lista de impostos diferentes e calcule os valores para um mesmo valor base.

// Exercício 17: Crie uma classe AplicacaoFinanceira com método simular(valor, meses).Depois crie subclasses:
// - Poupanca (0,6% ao mês).
// - TesouroDireto (0,8% ao mês, mas cobra 10% de IR sobre o lucro).
// - Criptomoeda (variação aleatória entre -20% e +25% ao mês).
// Implemente um sistema que crie várias aplicações e compare o rendimento após 12 meses.