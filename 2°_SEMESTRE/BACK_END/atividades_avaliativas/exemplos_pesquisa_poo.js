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