class ContaBancaria{

    #saldo
    numeroConta

    constructor(saldo, numeroConta){
        this.#saldo = saldo
        this.numeroConta = numeroConta
    }
    get getSaldo() {return this.#saldo}
}

let conta = new ContaBancaria(100,'R2-D2')

console.log(conta.numeroConta)
// console.log(conta.#saldo)// da erro pq o #saldo só pode ser acessado através de um método, e não aberto assim (só pode tirar pelo saque e adicionar pelo depósito)
console.log(conta.getSaldo)

