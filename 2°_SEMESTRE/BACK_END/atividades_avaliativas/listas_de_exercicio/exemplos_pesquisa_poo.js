class Veiculo {
    constructor() {
        
        if (this.constructor == Veiculo) {
            throw new Error("Essa é a classe abstrata!");
        }
    }
    
    mover() {
        // não deixa o método ser utilizado
        throw new Error("Esse método só pode ser utilizado nas classes filhas!");
    }
    
}

class Carro extends Veiculo {
    mover() {
        console.log("O carro anda na estrada!");
    }
}

class Moto extends Veiculo {
    mover() {
        console.log("A moto anda na estrada!");
    }
}

class Aviao extends Veiculo {
    mover() {
        console.log("O avião voa no céu!");
    }
}



const meuCarro = new Carro();
const minhaMoto = new Moto();
const meuAviao = new Aviao();

meuCarro.mover();
minhaMoto.mover();
meuAviao.mover();


class Mercado {
    constructor() {
        this.produtos = []; 
    }

    adicionarProduto(nome, preco) {
        const mercado = this;

        class Produto {
            constructor(nome, preco) {
                this.nome = nome;
                this.preco = preco;
                mercado.produtos.push(this);
            }
        }

        return new Produto(nome, preco);
    }
}

const mercado = new Mercado();

mercado.adicionarProduto("Batata", 10);
mercado.adicionarProduto("Pão Francês", 0.50);
mercado.adicionarProduto("Suco de uva", 15);

console.log("Total de produtos:", mercado.produtos.length); // Total de produtos: 3

// Objeto criado e instanciado IMEDIATAMENTE:
const usuario = new class {
    constructor(nome) {
        this.nome = nome;
        this.login = Date.now();
    }
}("Ana"); // ← Instanciação direta na declaração

console.log(usuario.nome); // "Ana" - já pode usar!


function criarAnimal(ClasseAnimal, nome) {
    return new ClasseAnimal(nome);
}

const meuPet = criarAnimal(class {
    constructor(nome) {
        this.nome = nome;
    }
}, "Pingo");

console.log(meuPet.nome);