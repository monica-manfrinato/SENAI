class Prato{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }

    exibirPreco(total) {
        return "R$" + total.toFixed(2)
    }
    }

const lasanha = new Prato ("Lasanha a bolonhesa", 45) //nome do primeiro prato do html

//alert("Seja bem vindo ao restaurante Sabor e Saber!") //Cria um alerta, um pop-up que aparece ao abrir o site
console.log('Teste') //aparece no console

const cliente = prompt("Bem vindo! para um atendimento personalizado, digite seu nome:")
console.log(cliente)

let nomeFormatado = cliente.trim().toUpperCase() //tira os espaços na frente e no final do texto
alert(`Seja bem vindo(a) ${nomeFormatado}`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if (hora <11){
    alert(`Bom dia ${nomeFormatado}! confira as delícias do café da manhã!`)
}
else{
    alert(`Boa tarde ${nomeFormatado}! aproveite as iguarias do almoço!`)
}

const querPrato = confirm(`Fala meu querido(a) ${nomeFormatado}, quer um prato?`)

if (querPrato){
    let quantidade = prompt("Hoje temos lasanha a bolonhesa, quantas você quer?")
    let total = lasanha.preco * quantidade
    alert(`O seu total será de ${lasanha.exibirPreco(total)}`)
}

