// Exercício 1:

const estoque = {
caixa: 50,
palete: 10,
empilhadeira: 2
};

function verificarEstoque(produto, quantidade,callback)
{
    if(callback(produto, quantidade)){
        return 'Pedido aprovado'
    }
    else{
        return 'Estoque Insuficiente'
    }
    
}


function disponivelEstoque(produto,quantidade)
{
if (quantidade <= estoque[produto] ){
    return true
}
else{ return false}

}

console.log(verificarEstoque('caixa' , 10, disponivelEstoque))


// Exercício 2:

// class Produto {

//     constructor(nome, preco, quantidade){
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

//     valorTotal(){
//         let totalEstoque = this.preco*this.quantidade
//         console.log(`Tendo ${this.quantidade} unidades de ${this.nome}, o valor total foi de ${totalEstoque} reais`)
//     }

//     reporEstoque(qtd){
//         this.quantidade += qtd
//         console.log(`O estoque agora tem ${this.quantidade} unidades de ${this.nome}.`)
//     }

// }

// let arroz = new Produto('Arroz', 30, 30)
// arroz.valorTotal()
// arroz.reporEstoque(10)
// arroz.valorTotal()



// Exercício 3:

// class Pedido {
//     constructor(num_pedido,nome, preco, quantidade){
//         this.num_pedido = num_pedido
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

//     valorTotal(){
//         let total = this.preco*this.quantidade
//         // console.log(`O valor total do pedido foi de ${total} reais`)
//         return total
//     }
    
//     emissaoResumo(){
        
//         console.log('===== RESUMO PEDIDO =====')
//         console.log(`
// Número do pedido: ${this.num_pedido}
// Produto: ${this.nome}
// Quantidade: ${this.quantidade}
// Valor total: ${this.valorTotal()}`)
        
//     }
// }

// let travesseiro = new Pedido (121, 'travesseiro', 40, 4)
// console.log(`O valor total do pedido foi de ${travesseiro.valorTotal()} reais`)
// travesseiro.emissaoResumo()


// Exercício 4:

// class Veiculos{

//     constructor(placa, capacidade){
//         this.placa = placa
//         this.capacidade = capacidade
//     }
// }

// class Caminhao extends Veiculos{
//     constructor(placa, capacidade, eixos, motorista){
//         super(placa, capacidade)
//         this.eixos = eixos
//         this.motorista = motorista
//     }


//     podeTransportar(carga){

//         let capacidadeTotal = this.capacidade*this.eixos
//         if (carga <= capacidadeTotal){
//             console.log(`O caminhão de ${this.motorista} vai conseguir carregar ${carga}kg.`)
//         }
//         else{console.log(`O caminhão de ${this.motorista} não suporta ${carga}kg.`)}
//     }
// }


// class Van extends Veiculos{
//     constructor(placa, capacidade, motorista){
//         super(placa, capacidade)
//         this.motorista = motorista
//     }


//     podeTransportar(carga){

    
//         if (carga <= this.capacidade){
//             console.log(`A van de ${this.motorista} vai conseguir levar ${carga}kg.`)
//         }
//         else{console.log(`A van de ${this.motorista} não suporta ${carga}kg.`)}
//     }
// }

// caminhaoMonica = new Caminhao('123-ABC', 8000, 4, 'Mônica')
// caminhaoMonica.podeTransportar(30000)

// vanMonica = new Van('123-ABC', 5000, 'Mônica')
// vanMonica.podeTransportar(7000)

// Exercício 5:

// class Funcionario {
//     constructor(nome, salarioBase){
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }

//     calcularSalario(){}
// }


// class OperadorDeEmpilhadeira extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

//     calcularSalario(){
//         let novoSalario = this.salarioBase*1.1
//         return novoSalario
//     }
// }


// class GerenteDeLogistica extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }
//     calcularSalario(){
//         let novoSalario = this.salarioBase + 2000
//         return novoSalario
//     }}

// monica = new GerenteDeLogistica('Mônica', 2000)
// rafael = new GerenteDeLogistica('Rafael', 2000)
// paula = new OperadorDeEmpilhadeira('Paula', 2000)
// davi = new GerenteDeLogistica('Davi', 2000)
// lucas = new OperadorDeEmpilhadeira('Lucas', 2000)

// let funcionarios = [monica, rafael, paula, davi, lucas]
// funcionarios.forEach(i => console.log (`O salário de ${i.nome} é de ${i.calcularSalario()} reais`));


// Exercício 6://///////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Almoxarifado{
//     #quantidade
//     constructor(quantidade, nome){
//         this.#quantidade = quantidade
//         this.nome = nome
//     }

//     adicionarProduto (qtd){
//         this.#quantidade += qtd
//     }


//     retirarProduto (qtd){

//         if (qtd > this.#quantidade){
//             return `Não foi possível retirar ${qtd} unidades de ${this.nome}, pois o estoque tem apenas ${this.#quantidade}unidades.`
//         }
//         else{
//             this.#quantidade -= qtd
//             console.log(`O estoque tem apenas ${this.#quantidade} unidades de ${this.nome} após a retirada`)
//         }
//     }


//     consultarEstoque(){
//         console.log(`=== ESTOQUE ===`)
//         console.log(`${this.nome}: ${this.#quantidade}`)

//     }
// }

// bolaVolei = new Almoxarifado(6, 'Bola de Vôlei')
// bolaVolei.adicionarProduto(4)
// bolaVolei.consultarEstoque()
// bolaVolei.retirarProduto(2)
// bolaVolei.consultarEstoque()












/////////////////////////// CORREÇÃO DO PROFESSOR ///////////////////////////

// Exercício 1)

// const estoque = {
// caixa: 50,
// palete: 10,
// empilhadeira: 2
// };

// function verificarEstoque(produto, quantidade, callback){
//     return(callback(produto,quantidade))
// }

// //função de callback
// function conferir(produto, qtd){ //aqui não importa o nome, pois os valores vão ser atribuídos no return que está dentro do verificarEstoque
//     if (estoque[produto] >= qtd){
//         return 'Pedido aprovado'
//     }
//     else{ return 'Estoque insuficiente'}
// }

// //testes

// console.log(verificarEstoque('Caixa', 20, conferir)); //Pedido aprovado
// console.log(verificarEstoque('Palete', 15, conferir)); //Estoque insuficiente
// console.log(verificarEstoque('Caixa', 1, conferir)); //Pedido aprovado



//Exercício 2:

// class Produto {

//     constructor(nome, preco, quantidade){
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

//     valorTotal(){
//         let totalEstoque = this.preco*this.quantidade
//         console.log(`Tendo ${this.quantidade} unidades de ${this.nome}, o valor total foi de ${totalEstoque} reais`)
//     }

//     reporEstoque(qtd){
//         this.quantidade += qtd
//         console.log(`O estoque agora tem ${this.quantidade} unidades de ${this.nome}.`)
//     }

// }

// let arroz = new Produto('Arroz', 30, 30)
// arroz.valorTotal()
// arroz.reporEstoque(10)
// arroz.valorTotal()


//Exercício 3:

// class Pedido {
//     constructor(num_pedido,nome, preco, quantidade){
//         this.num_pedido = num_pedido
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

//     valorTotal(){
//         let total = this.preco*this.quantidade
//         // console.log(`O valor total do pedido foi de ${total} reais`)
//         return total
//     }
    
//     emissaoResumo(){
        
//         console.log('===== RESUMO PEDIDO =====')
//         console.log(`
// Número do pedido: ${this.num_pedido}
// Produto: ${this.nome}
// Quantidade: ${this.quantidade}
// Valor total: ${this.valorTotal().toFixed(2)}`) //limita a quantidade de casas decimais a 2
        
//     }
// }

// let travesseiro = new Pedido (121, 'travesseiro', 40, 4)
// console.log(`O valor total do pedido foi de ${travesseiro.valorTotal()} reais`)
// travesseiro.emissaoResumo()



// Exercício 4:

// class Veiculos{

//     constructor(placa, capacidade){
//         this.placa = placa
//         this.capacidade = capacidade
//     }
// }

// class Caminhao extends Veiculos{
//     constructor(placa, capacidade, eixos, motorista){
//         super(placa, capacidade)
//         this.eixos = eixos
//         this.motorista = motorista
//     }


//     podeTransportar(carga){

//         let capacidadeTotal = this.capacidade*this.eixos
//         if (carga <= capacidadeTotal){
//             console.log(`O caminhão de ${this.motorista} vai conseguir carregar ${carga}kg.`)
//         }
//         else{console.log(`O caminhão de ${this.motorista} não suporta ${carga}kg.`)}
//     }
// }


// class Van extends Veiculos{
//     constructor(placa, capacidade, motorista){
//         super(placa, capacidade)
//         this.motorista = motorista
//     }


//     podeTransportar(carga){

    
//         if (carga <= this.capacidade){
//             console.log(`A van de ${this.motorista} vai conseguir levar ${carga}kg.`)
//         }
//         else{console.log(`A van de ${this.motorista} não suporta ${carga}kg.`)}
//     }
// }

// caminhaoMonica = new Caminhao('123-ABC', 8000, 4, 'Mônica')
// caminhaoMonica.podeTransportar(30000)

// vanMonica = new Van('123-ABC', 5000, 'Mônica')
// vanMonica.podeTransportar(7000)


// Exercício 5:

// class Funcionario {
//     constructor(nome, salarioBase){
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }

//     calcularSalario(){}
// }


// class OperadorDeEmpilhadeira extends Funcionario{
//     //se vai usar os mesmos atributos da classe pai, nem precisa do constructor nem do super
//     calcularSalario(){
//         let novoSalario = this.salarioBase*1.1
//         return novoSalario
//     }
// }


// class GerenteDeLogistica extends Funcionario{
//     //se vai usar os mesmos atributos da classe pai, nem precisa do constructor nem do super
//     calcularSalario(){
//         let novoSalario = this.salarioBase + 2000
//         return novoSalario
//     }}

//     const funcionarios = [ //para fazer array de objetos, coloca dentro dos colchetes e separa por virgula
//         new GerenteDeLogistica('Mônica', 2000), //não precisa nem colocar 'monica ='
//         new GerenteDeLogistica('Rafael', 2000),
//         new OperadorDeEmpilhadeira('Paula', 2000),
//         new GerenteDeLogistica('Davi', 2000),
//         new OperadorDeEmpilhadeira('Lucas', 2000)
//     ];

//     funcionarios.forEach(f => console.log (`O salário de ${f.nome} é de ${f.calcularSalario()} reais`)); //utilizando forEach

//     for (let i = 0; i< funcionarios.length; i++){ //utilizando for normal
//         let f = funcionarios[i]
//         console.log(`${f.nome} - Salário: R$ ${f.calcularSalario().toFixed(2)}`)
    // }




// Exercício 6:

// class Almoxarifado{
//     #quantidade
    
//     constructor(quantidade, nome){
//         this.#quantidade = quantidade
//         this.nome = nome
//     }

//     adicionarProduto (qtd){
//         this.#quantidade += qtd
//     }


//     retirarProduto (qtd){

//         if (qtd > this.#quantidade){
//             return `Não foi possível retirar ${qtd} unidades de ${this.nome}, pois o estoque tem apenas ${this.#quantidade}unidades.`
//         }
//         else{
//             this.#quantidade -= qtd
//             console.log(`O estoque tem apenas ${this.#quantidade} unidades de ${this.nome} após a retirada`)
//         }
//     }


//     consultarEstoque(){
//         console.log(`=== ESTOQUE ===`)
//         console.log(`${this.nome}: ${this.#quantidade}`)

//     }
// }

// bolaVolei = new Almoxarifado(6, 'Bola de Vôlei')
// bolaVolei.adicionarProduto(4)
// bolaVolei.consultarEstoque()
// bolaVolei.retirarProduto(2)
// bolaVolei.consultarEstoque()