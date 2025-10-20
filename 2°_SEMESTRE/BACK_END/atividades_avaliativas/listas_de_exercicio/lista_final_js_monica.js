//Parte 1: Funções//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 1: Crie uma função que receba uma string e retorne a quantidade de vogais presentes.

// function contagemVogais (palavra) {
//     let quantVogais = 0
//     const vogais = "aAeEiIoOuUáàâãÁÀÂÃéèêÉÈÊíìîÍÌÎóòôõÓÒÔÕúùûÚÙÛ"
//     let quantLetras = palavra.length
//     for (let i = 0; i < palavra.length; i++){
//         if (vogais.includes(palavra[i]))
//             quantVogais++
//     }

//     return quantVogais
// }

// const palavra = "Açúcar";
// const quantLetras = palavra.length;
// const quantVogais = contagemVogais(palavra)

// console.log(`A palavra ${palavra} possuí ${quantLetras} letras, sendo ${quantVogais} vogais!`)

// // Exercício 2: Implemente uma função que receba um número e retorne a sequência de Fibonacci até esse número.

// function sequenciaFibonacci (valorFinal) {
// if (valorFinal == 0){
//     return [0];
//     }
// if (valorFinal == 1){
//     return [0, 1];
//     }

// let lista = [0,1]
//     for (i = 2; i <= valorFinal; i++) {
//         lista[i] = lista[i - 1]  + lista[i - 2]
//     }
// return lista

// }

// const valorFinal = 8;
// const resultado = sequenciaFibonacci(valorFinal)
// console.log(`Segundo a sequência de Fibonacci, o valor de ${valorFinal} posições teve resultado de ${resultado}`) //retorna 9 posições pq seria de 0 a 8, ou seja, 9 elementos

// Exercício 3: Crie uma função que receba um array de números e retorne apenas os números primos.

// function filtrarLista (lista, callback)
// {
//     // lista.forEach(i => //no foreach o i é cada elemento, assumindo o valor de cada posição
//     // { 
//     //     if (callback(i))
//     //     {
//     //         console.log(i)
//     //     }        
//     // });

//     for(let i = 0; i < lista.length; i++){
//         if(callback (lista[i])){ // o 'callback' serve só como parametro, ou seja, na definição la embaixo, pra acessar ele, vai ser colocar o nome da função que realmente precisa estar nas possições determinadas pelo termo 'callback'
//             console.log(lista[i])
//         }
//     };
// }

// function primo (numero) {

//     if (numero < 2)
//      {
//         return false
//      }
    
//     for (let i = 2; i < numero; i++)
//     {
//         if(numero%i == 0)
//             {
//             return false
//         }
        
//         return true //não precisa colocar o else pq se não entrou na condição já vai seguir com oq estiver embaixo
        
//     }
// }

// filtrarLista(lista = [0,2,3,7,9], primo) //quando chama a função de callback, não precisa colocar o parâmetro dela

// Exercício 4: Escreva uma função que receba uma string e retorne se ela é um palíndromo (mesmo de trás para frente).

// function palindromo(string) { //não consegui fazer sozinha, tentei procurar na internet, mas não entendi direito
//     let texto = string.replace(/\s+/g, '').toLowerCase(); //comando para tirar os espaços e deixar tudo minúsculo
//     let invertido = texto.split('').reverse().join(''); //split cria um array com cada letra, e o reverse inverte a ordem, e o join junta tudo de novo
//     return texto === invertido;
// }

// console.log(palindromo("arara")); // true
// console.log(palindromo("ana")); // true
// console.log(palindromo("banana")); // false


//Parte 2: Classes simples//////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 5: Crie uma classe Produto com atributos nome, preco e estoque. Adicione um método vender(quantidade) que diminui o estoque.

// class Produto{
//   constructor(nome, preco, estoque){
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque
//   }

//   vender(quantidade){

//     if (quantidade === 0){
//       console.log(`Nao foi possível realizar a venda, estoque ${this.nome} está zerado!`)
//     }
//     else if(quantidade > this.estoque){
//       console.log(`Não foi possível realizar a venda, o estoque de ${this.nome} tem apenas ${this.estoque} itens!`)
//     }
//     else{
//     this.estoque = this.estoque - quantidade
//     console.log(`Após a venda, restaram ${this.estoque} unidades de ${this.nome} no estoque.`)
    
//     }
//   }
// }

// const arroz = new Produto ("arroz", 12.50, 40)
// arroz.vender(50)

// Exercício 6: Crie uma classe ContaEnergia que recebe consumoKwh e valorPorKwh. Adicione um método que calcula o valor total da conta.

// class ContaEnergia{
//   constructor(consumoKwh, valorPorKwh){
//   this.consumoKwh = consumoKwh
//   this.valorPorKwh = valorPorKwh
//   }
  
//   valorConta(){
//     if(this.consumoKwh <= 0 || this.valorPorKwh <= 0 ){
//       console.log("Insira valores válidos!")

//     }
//     else{
//     let valorTotal = this.consumoKwh*this.valorPorKwh
//     console.log(`O valor final da conta foi de ${valorTotal} reais!`)
//     }
    
//   }
  
// }

// const contaMonica = new ContaEnergia(40, 0.70)
// contaMonica.valorConta()

// Exercício 7: Crie uma classe Aluno com notas de 3 provas. Adicione um método media() que calcula a média e outro aprovado() que retorna se a média é maior ou igual a 7.

// class Aluno{
//   constructor(nota1, nota2, nota3){
//     this.nota1 = nota1
//     this.nota2 = nota2
//     this.nota3 = nota3
//   }
  
//   media(){
//     if(this.nota1 < 0 ||this.nota2 < 0 || this.nota3 < 0 ){
//       console.log("Insira uma nota válida!")
//       }
      
//     else{
//       let media = (this.nota1 + this.nota2 + this.nota3)/3
//       console.log(`A média desse aluno foi ${media}.`)
//     }
//     }
//   }
  
// const monica = new Aluno(10, 9, 8)
// monica.media()

// Exercício 8: Crie uma classe Cinema que tem nome, capacidade e ingressosVendidos. Adicione um método venderIngresso(qtd) que só permite vender se houver lugares disponíveis.

// class Cinema {
//   constructor(nome, capacidade, ingressosVendidos){
//     this.nome = nome
//     this.capacidade = capacidade
//     this.ingressosVendidos = ingressosVendidos
//   }
  
//   venderIngresso(qtd){
//     if(qtd <= 0 ){
//       console.log("O número mínimo de compra é 1 ingresso!")
//     }
//     else if (this.capacidade - this.ingressosVendidos  >= qtd){
//       console.log(`Parabéns! A compra de ${qtd} ingressos foi efetuada! Boa sessão!`)
//       this.ingressosVendidos += qtd
    
//     }
//     else{
//       let qutdIngressos = this.capacidade - this.ingressosVendidos
//       console.log(`Infelizmente sua compra não pode ser efetuada, apenas ${qutdIngressos} ingressos estão disponíveis...`)
//     }
//   }
// }

// const araujoItu = new Cinema ('araujoItu', 200, 198)

// araujoItu.venderIngresso(0) //erro de mínimo de compra 
// araujoItu.venderIngresso(2)
// araujoItu.venderIngresso(2) //os dois ingressos de cima ocuparam as vagas que tinha

// Exercício 9: Crie uma classe Biblioteca que armazena uma lista de livros. Adicione métodos adicionarLivro, removerLivro e listarLivros

// class Biblioteca {
//   constructor(){
//     this.livros = []
//   }
  
//   adicionarLivro(livro){
//   this.livros.push(livro)
//   console.log(`O livro ${livro} foi adicionado!`)
//   }

//   removerLivro(livro){
//   const livroRemovido = this.livros.pop() //vai remover o último livro, não sei outra forma de fazer
//   console.log(`O livro ${livroRemovido} foi removido do sistema!`)
  
//   }

//   listarLivros(){
  
//   for (let i = 0; i< this.livros.length; i++){
//     console.log(this.livros[i])
//     }
//   }
// }


// biblioteca = new Biblioteca()
// biblioteca.adicionarLivro('1. Percy Jackson')
// biblioteca.adicionarLivro('2. Tweet Cute')
// biblioteca.adicionarLivro('3. O diário de Anne Frank')

// biblioteca.listarLivros()

// biblioteca.removerLivro()
// biblioteca.listarLivros()

//Parte 3: Encapsulamento///////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 10: Crie uma classe Cofrinho que armazena valores de moedas e notas em um atributo privado. Adicione métodos depositar(valor), retirar(valor) e saldo().

// class Cofrinho{
//   #moedas
//   #notas
//   constructor(moedas, notas){
//     this.#moedas = moedas
//     this.#notas = notas
//   }
  
//   depositar(qtdMoedas, qtdNotas){
//     this.#moedas += qtdMoedas
//     this.#notas += qtdNotas
//   }
  
//   retirar(qtdMoedas, qtdNotas){
//     if (qtdMoedas > this.#moedas || qtdNotas > this.#notas) {
//       console.log(`Não foi possível retirar ${qtdMoedas} moedas e ${qtdNotas} notas`)
//       console.log(`Saldo atual: ${this.#moedas} moedas e ${this.#notas} notas`)
//     }

//     else{
//     this.#moedas -= qtdMoedas
//     this.#notas -= qtdNotas
//     console.log(`Foram retiradas ${qtdMoedas} moedas e ${qtdNotas} notas`)
//     console.log(`Restaram ${this.#moedas} moedas e ${this.#notas} notas`)
//     }

    
//   }
  
//   get saldo(){
//     console.log(`=== SALDO DO COFRINHO ===`)
//     console.log(`Moedas: ${this.#moedas}`)
//     console.log(`Notas: ${this.#notas}`)

//   }
// }
  
// const cofrinhoMonica = new Cofrinho(5, 5)

// cofrinhoMonica.depositar(10, 5)
// cofrinhoMonica.saldo //adicionei 10 e 5 então fica 15 e 10
// cofrinhoMonica.retirar(3, 2)
// cofrinhoMonica.saldo //retirei 3 e 2 então fica 12 e 8
// cofrinhoMonica.retirar(20, 10) //erro pois não há saldo o suficiente para retirar essa quantidade de notas e moedas


// Exercício 11: Crie uma classe Banco que possua contas privadas. Cada conta deve ter número, titular e saldo. Adicione métodos abrirConta(titular, saldoInicial), consultarSaldo(numeroConta) e transferir(contaOrigem, contaDestino, valor).


// class Banco {
  
//   #contas = {}
//   #proximoNumero = 101
  
//   constructor(contas){}
  
//   abrirConta(titular, saldoInicial){
    
    
//     const numeroConta = this.#proximoNumero
//       this.#contas[numeroConta] = {
//         titular: titular,
//         saldo: saldoInicial
//       }
//       this.#proximoNumero++ //já deixa pronto o valor para a próxima conta
//       console.log(`${titular}, sua conta foi criada com sucesso! Ela possuí número ${numeroConta}`)
//       return numeroConta //nesse número estão armazenadas as informações da conta criada
//     }




//   consultarSaldo(numeroConta){
    
//     if (this.#contas[numeroConta]){
//       console.log (`A conta de número ${numeroConta} tem saldo igual a: ${this.#contas[numeroConta].saldo} reais`)
//       } 
//     else {
//       console.log(`A conta ${numeroConta} não foi encontrada!`)
//     }
    
//   }
  
  
  
  
//   transferir(contaOrigem, contaDestino, valor){
    
//     if (!this.#contas[contaOrigem]) { //o ! é utilizado para analisar se a condição é falsa
//       console.log(`A conta de origem ${contaOrigem} não foi encontrada!`)
//       return
//     }
    
//     if (!this.#contas[contaDestino]) {
//       console.log(`A conta de destino ${contaDestino} não foi encontrada!`)
//       return
//     }
    
    
//     if (this.#contas[contaOrigem].saldo < valor) { //confere se o valor que está sendo transferido não é maior do que o valor q tem na conta
//       console.log(`Saldo insuficiente na conta ${contaOrigem}`)
//       return //coloca return no final dos erros, porque se não ele vai executar as coisas q estão embaixo
//       }
    
    
//     this.#contas[contaOrigem].saldo -= valor //tira da conta origem
//     this.#contas[contaDestino].saldo += valor //coloca na conta destino
//     console.log(`A transferência de ${valor} reais foi realizada com sucesso!`)
    
//   }
// }



// const bancobr = new Banco()

// const contaMonica = bancobr.abrirConta('Mônica', 1000)
// const contaPaula = bancobr.abrirConta('Paula', 200)

// bancobr.consultarSaldo(contaMonica)
// bancobr.consultarSaldo(contaPaula)

// bancobr.transferir(contaMonica, contaPaula, 200)

// bancobr.consultarSaldo(contaMonica) //-200 reais (800)
// bancobr.consultarSaldo(contaPaula) //+200 reais (400)

// Exercício 12: Crie uma classe Pedido que armazena uma lista privada de itens (nome do produto e valor). Adicione métodos adicionarItem, removerItem e calcularTotal.

// class Pedido{
//  #itens = []

//  adicionarItem(nome_produto, valor) {
//         this.#itens.push({ nome_produto, valor });
//         console.log(`Item "${nome_produto}" foi adicionado com valor de R$${valor}.`);
//     }

//     removerItem(nome_produto) {
//         const index = this.#itens.findIndex(item => item.nome_produto === nome_produto); //não consegui fazer sozinha essa parte, mas não entendi direito também
//         if (index !== -1) {
//             const removido = this.#itens.splice(index, 1)[0];
//             console.log(`O item "${removido.nome_produto}" foi removido.`);
//         } else {
//             console.log(`O item "${nome_produto}" não foi encontrado no pedido.`);
//         }
//     }

//     calcularTotal() {
//         let total = 0;
//         this.#itens.forEach(item => {
//             total += item.valor;
//         });
//     console.log(`Total do pedido: R$${total}`);
//     return total;
//     }
// }

// const pedido = new Pedido();
// pedido.adicionarItem("Canelone", 20);
// pedido.adicionarItem("Achocolatado", 7);
// pedido.removerItem("Canelone");
// pedido.calcularTotal();

// Exercício 13: Crie uma classe UsuarioSistema com atributos privados login e senha. Adicione métodos autenticar(login, senha) e alterarSenha(senhaAntiga, senhaNova).

// class UsuarioSistema{
//     #login
//     #senha
//     constructor(login, senha){
//         this.#login = login
//         this.#senha = senha
//     }

//     autenticar(login, senha){
//         if (login == this.#login && senha == this.#senha){
//             return 'Perfil autenticado!'
//         }
//         else{
//             return 'Login ou senha errada!'
//         }

//     }


//     alterarSenha(senhaAntiga, senhaNova){
//         if (this.#senha = senhaAntiga){
//             this.#senha = senhaNova
//             return 'A senha foi alterada!'
//         }
//         else{
//             return 'Senha incorreta, alteração não foi concluída!'
//         }

//     }
// }

// const Monica = new UsuarioSistema ('Monica' ,123)

// console.log(Monica.autenticar('Monica', 123))
// console.log(Monica.autenticar('Lucas', 123))

// console.log(Monica.alterarSenha(123, 321))
// console.log(Monica.autenticar('Monica', 123))
// console.log(Monica.autenticar('Monica', 321))



//Parte 4: Herança//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercício 14: Crie uma classe Funcionario com atributos nome e salarioBase. Depois crie subclasses:
// - FuncionarioCLT (desconta 10% de imposto do salário + 5% de comissão).
// - FuncionarioPJ (sem desconto).
// - Estagiario (desconta 5% de vale transporte).
// Implemente o método calcularSalarioLiquido() em cada subclasse.

// class Funcionario {
//   constructor(nome, salarioBase){
//     this.nome = nome
//     this.salarioBase = salarioBase
//   }
// }

//  class FuncionarioCLT extends Funcionario{
//     constructor(nome, salarioBase){
//     super(nome, salarioBase)}
  
//   calcularSalarioLiquido(){
//   let salarioImposto = this.salarioBase - this.salarioBase*0.10
//   let salarioFinal = salarioImposto*1.05
//   console.log(`O(a) funcionário(a) ${this.nome} recebe um salário de ${salarioFinal} reais`)
//   }
// }

// class FuncionarioPJ extends Funcionario{
//   constructor(nome, salarioBase){
//     super(nome, salarioBase)}
    
//   calcularSalarioLiquido()
//   {console.log(`O(a) funcionário(a) ${this.nome} recebe um salário de ${this.salarioBase} reais`)}
// }


// class Estagiario extends Funcionario{
//   constructor(nome, salarioBase){
//     super(nome, salarioBase)}
//   calcularSalarioLiquido()
//   {let salarioVale = this.salarioBase - this.salarioBase*0.05
//   console.log(`O(a) funcionário(a) ${this.nome} recebe um salário de ${salarioVale} reais`)}
// }
  
  
//   const Monica = new FuncionarioCLT('Mônica', 2000)
//   Monica.calcularSalarioLiquido()
  
//   const Rafael = new FuncionarioPJ('Rafael', 2000)
//   Rafael.calcularSalarioLiquido()
  
//   const Davi = new Estagiario('Davi', 2000)
//   Davi.calcularSalarioLiquido()
  

// Exercício 15: Crie uma classe Investimento com um método calcularRendimento(valor, meses).Depois crie subclasses:
// - RendaFixa (rende 0,7% ao mês).
// - CDB (rende 1% ao mês, mas cobra 15% de imposto sobre o lucro).
// - Acao (rende valores aleatórios entre -5% e +10% ao mês).
// Implemente o cálculo mês a mês.

// class Investimento{
  
//   calcularRendimento(valor, meses){}
// }


// class RendaFixa extends Investimento{

// calcularRendimento(valor,meses){
//   let rendimento = valor*1.007**meses
//   console.log(`Seu dinheiro rendeu ${rendimento-valor}, ficando com ${rendimento} ao final de ${meses} meses.`)
// }
// }


// class CDB extends Investimento{
// calcularRendimento(valor,meses){
//   let rendimento = valor*1.01**meses
//   let lucro = rendimento - valor
//   let imposto = lucro*0.15
//   console.log(`Seu dinheiro rendeu ${lucro}, ficando com ${rendimento - imposto} ao final de ${meses} meses.`)
// }
// }


// class Acao extends Investimento{
//   calcularRendimento(valor,meses){
//     let valorAtual = valor
    
//     for(let mes = 1; mes <= meses; mes++){
//       // Gera variação aleatória entre -5% e +10%
//       let variacao = (Math.random() * 15 - 5) / 100
//       valorAtual = valorAtual * (1 + variacao)
//     }
    
//     let lucro = valorAtual - valor
//     console.log(`Seu dinheiro rendeu ${lucro}, ficando com ${valorAtual} ao final de ${meses} meses.`)
//   }
// }


// const rendaFixa = new RendaFixa()
// rendaFixa.calcularRendimento(1000, 12)

// const cdb = new CDB()
// cdb.calcularRendimento(1000, 12)

// const acao = new Acao()
// acao.calcularRendimento(1000, 12)



//Parte 5: Polimorfismo/////////////////////////////////////////////////////////////////////////////////////////////////////


// Exercício 16: Crie uma classe Imposto com método calcular(valor).Depois crie subclasses:
// - ICMS (18% sobre o valor).
// - ISS (5% sobre o valor).
// - IRPF (progressivo: até 2000 = isento, de 2001 até 5000 = 15%, acima de 5000 = 27,5%).
// Implemente um sistema que receba uma lista de impostos diferentes e calcule os valores para um mesmo valor base.

// class Imposto{
//     constructor(nome, valor){
//         this.nome = nome
//         this.valor = valor
//     }
//     calcular(nome, valor){}
// }


// class ICMS extends Imposto{
//         constructor(nome, valor){
//             super(nome,valor)
//     }
//     calcular(nome, valor){
//         let imposto = valor*0.18
//         let valorImposto = valor + imposto
//         return `Aplicando o imposto ${nome}, o novo valor será de ${valorImposto} reais` 
//     }
// }

// class ISS extends Imposto{
//         constructor(nome, valor){
//             super(nome,valor)
//     }
//     calcular(nome, valor){
//         let imposto = valor*0.05
//         let valorImposto = valor + imposto
//         return `Aplicando o imposto ${nome}, o novo valor será de ${valorImposto} reais` 
//     }
// }

// class IRPF extends Imposto{
//         constructor(nome, valor){
//             super(nome,valor)
//     }
//     calcular(nome, valor){
//         if(valor <=0){
//             return 'Insira um valor válido'
//         }
//         else if(valor <= 2000){
//             return `Como o valor é abaixo do mínimo, o imposto ${nome}, não alterou o valor final (Continua sendo de ${valor})` 
//         }
//         else if (valor >= 2001 && valor < 5000){
//             return `Aplicando o imposto ${nome}, o novo valor será de ${valor*1.15} reais` 
//         }
//         else{
//             return `Aplicando o imposto ${nome}, o novo valor será de ${valor*1.275} reais` 
//         }
//     }
// }

// monica = new ISS ('ISS', 2000)
// rafael = new IRPF ('IRPF', 2000)
// paula = new ISS ('ISS', 2000)
// davi = new ICMS ('ICMS', 2000)
// lucas = new IRPF ('IRPF', 2000)


// let impostos = [monica, rafael, paula, davi, lucas]
// impostos.forEach(i => console.log(i.calcular(i.nome, i.valor))); //precisa colocar o i.valor e i.nome dentro, pq se não ele ficasem argumento pra usar


// Exercício 17: Crie uma classe AplicacaoFinanceira com método simular(valor, meses).Depois crie subclasses:
// - Poupanca (0,6% ao mês).
// - TesouroDireto (0,8% ao mês, mas cobra 10% de IR sobre o lucro).
// - Criptomoeda (variação aleatória entre -20% e +25% ao mês).
// Implemente um sistema que crie várias aplicações e compare o rendimento após 12 meses.

// class AplicacaoFinanceira{
//     constructor(valor, meses){
//         this.valor = valor
//         this.meses = meses
//     }
//     simular(valor, meses){
//         //montante (soma do juros com o valor inicial) = C.(1 + i)**t
//     }
// }


// class Poupanca extends AplicacaoFinanceira{
//     constructor(valor, meses){
//         super(valor, meses)
//     }
//     simular(){
//         //montante (soma do juros com o valor inicial) = C.(1 + i)**t
//         let montante = this.valor*(1 + 0.006)**this.meses
//         return `O total após ${this.meses} meses utilizando aplicação financeira foi de ${montante.toFixed(2)}`
//     }
// }
// class TesouroDireto extends AplicacaoFinanceira{
//     constructor(valor, meses){
//         super(valor, meses)
//     }
//     simular(){
//         //montante (soma do juros com o valor inicial) = C.(1 + i)**t
//         //TesouroDireto (0,8% ao mês, mas cobra 10% de IR sobre o lucro)
//         let montante = this.valor*(1 + 0.008)**this.meses
//         let juros = montante - this.valor
//         let jurosFinal = juros - juros*0.10
//         return `O total após ${this.meses} meses utilizando aplicação financeira foi de ${this.valor + jurosFinal.toFixed(2)}`
//     }
// }
// class Criptomoeda extends AplicacaoFinanceira{
//     constructor(valor, meses){
//         super(valor, meses)
//     }
//     simular(){
//         //montante (soma do juros com o valor inicial) = C.(1 + i)**t
//         // - Criptomoeda (variação aleatória entre -20% e +25% ao mês).
//         let montante = this.valor
//         for(let mes = 1; mes <= this.meses; mes++){
//             let variacao = (Math.random() * 45 - 20) / 100 // entre -20% e +25%
//             montante = montante * (1 + variacao)
//         }
//         return `O total após ${this.meses} meses utilizando aplicação financeira foi de ${montante.toFixed(2)}`
//     }
//   }


// const investidor1 = new Poupanca (50, 12)
// const investidor2 = new TesouroDireto (50,12)
// const investidor3 = new Criptomoeda (50, 12)

// console.log(investidor1.simular())
// console.log(investidor2.simular())
// console.log(investidor3.simular())
