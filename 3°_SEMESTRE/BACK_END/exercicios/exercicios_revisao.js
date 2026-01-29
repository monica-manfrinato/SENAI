// Crie uma classe chamada Pessoa que possua:
// - idade
// - nome
// Crie um método apresentar() que exiba no console o nome e a idade da pessoa.

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

apresentar(){
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
    }
}

const pessoa1 = new Pessoa("LeTiCiNhA RObErTiNhA", 90)
pessoa1.apresentar()



// Crie uma classe chamada Produto que possua:
// - nome
// - preco
// Crie um método mostrarPreco() que exiba no console o nome e o preco do produto

class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

mostrarPreco(){
    console.log(`Nome: ${this.nome}, Preço: ${this.preco.toFixed(2)}`)
    }
}

const produto1 = new Produto("BoLo Da LeTiCiNhA RObErTiNhA", 90.65)
produto1.mostrarPreco()



// Crie uma classe chamada Funcionario que possua:
// - nome
//Crie uma classe Gerente que herda de Funcionario e possuí:
// - setor

// Crie um método que exiba o nome e o setor do gerente

class Funcionario{
    constructor(nome){
        this.nome = nome
    }
}

class Gerente extends Funcionario{
    constructor(nome, setor){
        super(nome)
        this.setor = setor

    }


mostrarDados(){
    console.log(`Nome: ${this.nome}, Setor: ${this.setor}`)
}}

const gerente1 = new Gerente("Celso", "DP")
gerente1.mostrarDados()



// Crie uma classe chamada Veiculo que possua:
// - marca
//Crie uma classe Carro que herda de Veiculo e possuí:
// - modelo

// Crie um método que exiba a marca e o modelo do carro

class Veiculo{
    constructor(marca){
        this.marca = marca
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo){
        super(marca)
        this.modelo = modelo

    }


exibirModeloMarca(){
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
}}

const carro1 = new Carro("Ford", "Ka")
carro1.exibirModeloMarca()
