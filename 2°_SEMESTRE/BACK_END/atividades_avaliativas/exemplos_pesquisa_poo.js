class Veiculo {
    constructor() {
        console.log("Essa é a classe abstrata!");
    }
    
    mover() {
        console.log("O método não pode ser implementado aqui! Somente na classe filha");
    }
}

class Carro extends Veiculo {
    mover() {
        console.log("Carro anda na estrada!");
    }
}

class Moto extends Veiculo {
    mover() {
        console.log("Moto anda na estrada!");
    }
}

class Aviao extends Veiculo {
    mover() {
        console.log("Avão voa no céu!");
    }
}


const meuCarro = new Carro();
const minhaMoto = new Moto();
const meuAviao = new Aviao();

meuCarro.mover();
minhaMoto.mover();
meuAviao.mover();