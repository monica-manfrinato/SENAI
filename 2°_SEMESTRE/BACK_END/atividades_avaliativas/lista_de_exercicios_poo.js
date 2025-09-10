//CLASSE DO PRODUTO

class Produto {  
    constructor(nome, preco, quantidade_em_estoque ){
    this.nome = nome
    this.preco = preco
    this.quantidade_em_estoque = quantidade_em_estoque
    }
}

calcular_valor_estoque(); {

    console.log(`O valor total do estoque de ${this.nome} é de R$${this.quantidade_em_estoque*this.preco}`)
}
