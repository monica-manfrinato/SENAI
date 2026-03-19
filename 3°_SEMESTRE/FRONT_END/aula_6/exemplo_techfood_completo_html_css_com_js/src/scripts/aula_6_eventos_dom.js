const inputQtd = document.querySelector("#qtd_lasanha")
const precoTexto = document.querySelector("#preco_lasanha")



//EXEMPLO UTILIZANDO O INPUT

if (inputQtd && precoTexto){ //quando receber ambos os valores esse if será realizado
    inputQtd.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtd.value) * precoUnitario //O Number() torna o valor recebido do usuário convertido para valor numérico
        precoTexto.textContent = `R${total.toFixed(2)}`

        precoTexto.style.color = total > 150 ? "#FFC07F" : "#F15156"
    })
}

//EVENTOS DE CLICK PARA CLASS - EVENT.TARGET



//buscaria na tela toda (em todo o document) BUSCA NA TELA TODA
document.addEventListener('click', (event) =>{
    const clicado = event.target //da pra fazer qualquer coisa mediante ao que foi clicado
})




//busca em uma seção específica, filtrando a busca, facilitando para o código (USADO PARA QUANDO QUEREMOS ESPECIFICAR, NESSE CASO, SÓ QUEREMOS QUE O BOTÃO DE MASSAS REALIZE A AÇÃO) BUSCA ESPECÍFICA 

massas = document.querySelector('#secao_massas')
massas.addEventListener('click', (event) =>{ //vai analisar o clique mas na seção massas somente
    const clicado = event.target

    if (clicado.classList.contains('bt_pedido')){ //confere se o item clicado realmente é um botão
        console.log("Você clicou em um botão de massas!")
    }
}) //o contains busca na class q foi puxada, se tem o elemento q está dentro dos parenteses





//BUSCA FILTRANDO SOMENTE PARA QUEM TEM BT_PEDIDO, ENTÃO NÃO PRECISA REFERENCIAR NENHUM PAI

const botoesPedido = document.querySelectorAll('.bt_pedido') //querySelectorAll pq é uma classe, precisa pegar TODOS OS ELEMENTOS DELA, precisa colocar '.classe' NÃO ESQUECE DO PONTO!!

botoesPedido.forEach((botao) => { //percorra por todos os botões da class, e encontre qual está sendo clicado
    botao.addEventListener("click", (event) =>{
        botao.textContent = " 👌Pedido enviado"
        botao.style.backgroundColor = "red"
        botao.style.cursor = "default"
        botao.disabled = true
    }
    )
})

