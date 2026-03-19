const contador = document.getElementById('contador')
const botao = document.getElementById('btn-curtir')
let curtidas = 0

botao.addEventListener("click", () =>{
    curtidas++
    contador.textContent = curtidas
})



// Monitoramento (Input): Sempre que o usuário digitar no campo de texto, o parágrafo de "Preview" deve mostrar o texto em tempo real.

const campoTexto = document.getElementById('campo-texto')
const preview = document.getElementById('preview-texto')

campoTexto.addEventListener('input', () =>{
    preview.textContent = `Digitando: ${campoTexto.value}`
})


// Sensores (Mouse): Ao entrar com o mouse na caixa de cor, mude-a para azul. Ao sair, ela deve voltar à cor original.

const caixaCor = document.getElementById('caixa-cor')

caixaCor.addEventListener("mouseover", ()=> {
    caixaCor.style.backgroundColor = '#0758a9'
})

caixaCor.addEventListener("mouseout", ()=> {
    caixaCor.style.backgroundColor = '#95a5a6'
})


// Desafio Extra (Reset): Crie um botão (ou use uma tecla) que limpe o input e zera o contador ao mesmo tempo.


const botaoReset = document.getElementById('caixa-cor')
