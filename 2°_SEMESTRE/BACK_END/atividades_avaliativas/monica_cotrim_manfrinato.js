// Exercício 1:Crie uma função verificarEstoque(produto, quantidade, callback) que:
// Receba o nome do produto e a quantidade solicitada;
// Use o callback para verificar se a quantidade está disponível no estoque.
// Retorne "Pedido aprovado" se tiver estoque suficiente ou "Estoque insuficiente" caso contrário.
// Para simular um banco de dados utilize:
//           // "Banco de dados" de estoque
//           const estoque = {
//             caixa: 50,
//             palete: 10,
//             empilhadeira: 2
//           };
// Para utilizar a quantidade de produtos em estoque utilize: estoque[produto]

// const estoque = {
// caixa: 50,
// palete: 10,
// empilhadeira: 2
// };

// function verificarEstoque(produto, quantidade,callback)
// {
//     if(callback(produto) == false)
//     {
//         console.log('')
//     }
// }


// function disponivelEstoque(produto,estoque)
// {


// }


// if estoque.caixa != quantidade


// Exercício 2:Classe Simples – Produto

// Crie uma classe Produto com os atributos:
// nome (string)
// preco (number)
// quantidade (number)
// Implemente os métodos:
// valorTotal() → retorna o valor total do estoque do produto (preço × quantidade).
// reporEstoque(qtd) → aumenta a quantidade em estoque do produto.

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
// arroz.reporEstoque(5)



// Exercício 3:Na área de almoxarifado, cada pedido feito para o fornecedor contém um produto por vez,  O sistema precisa registrar o número do pedido, o nome do produto solicitado, o preço unitário do produto e a quantidade solicitada.

// O supervisor explicou que precisa:
// Calcular o valor total do pedido (preço × quantidade).
// Emitir um resumo contendo o número do pedido, nome do produto, quantidade e valor total.

// class Pedido {
//     constructor(num_pedido,nome, preco, quantidade){
//         this.num_pedido = num_pedido
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

//     valorTotal(){
//         let total = this.preco*this.quantidade
//         console.log(`O valor total do pedido foi de ${total} reais`)
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
// travesseiro.valorTotal()
// travesseiro.emissaoResumo()


// Exercício 4:Crie uma classe Veiculo com atributos:
// placa
// capacidade (em kg)
// Depois crie duas subclasses:
// Caminhao → adiciona atributo eixos e motorista.
// Van → adiciona atributo motorista.
// Cada subclasse deve implementar o método podeTransportar(carga) que verifica se o veículo consegue realizar a viagem:
// Van suporta até 5.000 kg.
// Caminhão suporta até 8.000 kg por eixo.
// Exemplo: um caminhão com 2 eixos pode transportar até 16.000 kg



// Exercício 5:Crie uma classe Funcionario com os atributos:
// nome
// salarioBase
// E um método calcularSalario().

// Crie subclasses:
// OperadorDeEmpilhadeira → recebe adicional de 10% sobre o salário base.
// GerenteDeLogistica → recebe adicional fixo de R$ 2.000,00.
// Simule um array com 5 funcionários diferentes e exiba os salários calculados utilizando for, demonstrando o polimorfismo em ação.



// Exercício 6:Crie uma classe Almoxarifado que armazene um atributo privado #quantidade e o nome de um produto.

// Implemente os métodos:
// adicionarProduto(nome, qtd)
// retirarProduto(nome, qtd) (não permitir retirar mais do que existe)
// consultarEstoque() (retorna todos os produtos e quantidades).
