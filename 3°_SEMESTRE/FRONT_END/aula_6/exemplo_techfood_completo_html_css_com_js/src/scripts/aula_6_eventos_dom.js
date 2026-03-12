const inputQtd = document.querySelector("#qtd_lasanha")
const precoTexto = document.querySelector("#preco_lasanha")

if (inputQtd && precoTexto){ //quando receber ambos os valores esse if será realizado
    inputQtd.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtd.value) * precoUnitario //O Number() torna o valor recebido do usuário convertido para valor numérico
        precoTexto.textContent = `R${total.toFixed(2)}`
    })
}