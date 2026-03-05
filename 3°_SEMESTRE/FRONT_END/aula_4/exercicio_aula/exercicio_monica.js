// Exercício 1:

// const nomeCliente = prompt("Insira o seu nome:")
// console.log(nomeCliente)

// const sobrenomeCliente = prompt("Insira o seu sobrenome:")
// console.log(sobrenomeCliente)

// let nomeFormatado = nomeCliente.trim().toLowerCase() + ' ' + sobrenomeCliente.trim().toLowerCase()
// console.log(nomeFormatado)
// alert(`Olá ${nomeFormatado}, tudo bem?`)

// let qtdCaracteres = nomeCliente.trim().concat(sobrenomeCliente.trim())
// alert(`Essa palavra tem ${qtdCaracteres.length} caractéres `)




// Exercício 2:

// const totalConta = prompt("Insira o valor total da conta:")
// const qtdPessoas = prompt("Quantas pessoas estavam na mesa?")

// let valorPessoa = totalConta/qtdPessoas
// alert(`Cada amigo deve pagar R$ ${valorPessoa.toFixed(2)}`)



// Exercício 3:

// const valorCompra = prompt ("Insiria o valor da compra:")
// const cupomDesconto = prompt("Você possuí cupom de desconto? (Digite sim ou nao)")
// if (valorCompra > 150 || cupomDesconto.toLocaleLowerCase().trim == 'sim'){
//     console.log("Frete grátis liberado")
// }
// else{
//     console.log("Frete pago")
// }

// Exercício 4: 

// const numUsuario = prompt("Insira um número aletório de 1 à 10:")
// const numSorteado = Math.floor(Math.random()*10)+1

// if (numUsuario === numSorteado){
//     alert("Parabéns! Você ganhou um brinde!")
// }
// else{
//     alert(`Que pena, o número sorteado foi ${numSorteado}`)
// }


// Exercício 5: 

// class Veiculo{
//     constructor(modelo, marca, ano){
//         this.modelo = modelo
//         this.marca = marca
//         this.ano = ano
//     }

//         idadeVeiculo(anoAtual) {
//         return anoAtual - ano
//     }
//     }


// const modelo = prompt("Insira o modelo do veículo:")
// const marca = prompt("Insira a marca do veículo:")
// const ano = prompt("Insira o ano do veículo:")
// const anoAtual = getFullYear()

// const carro = new Veiculo (modelo, marca, ano)

// alert(` O seu ${modelo} tem ${carro.idadeVeiculo(anoAtual)} anos de idade!`)