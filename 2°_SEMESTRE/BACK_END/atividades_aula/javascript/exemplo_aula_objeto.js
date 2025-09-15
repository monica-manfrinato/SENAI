class ContaBancaria{

    #saldo
    numeroConta

    constructor(saldo, numeroConta){
        this.#saldo = saldo
        this.numeroConta = numeroConta
    }


    get getSaldo() {return this.#saldo}

    set setSaldo(valor){ return this.#saldo += valor}//define o setSaldo, precisa colocar o (valor) parâmetro e dps =valor PARA MODIFICAÇÃO

    

set setSaldo(valor){ //setter para validação
 
    if (valor != null && valor > 0 ){
        this.#saldo = valor
    }
    else{
        console.log('⚠ Saldo inválido')
    }
}


}
let conta = new ContaBancaria(100,'R2-D2')

console.log(conta.numeroConta)
// console.log(conta.#saldo)// da erro pq o #saldo só pode ser acessado através de um método, e não aberto assim (só pode tirar pelo saque e adicionar pelo depósito)

// console.log(conta.getSaldo)
// conta.getSaldo = 20000 //tentativa de modificação
// console.log(conta.getSaldo) //mostrou q nada mudou

conta.setSaldo = -5000
console.log(conta.getSaldo) //não printa set mas sim o GET

