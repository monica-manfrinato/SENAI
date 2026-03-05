//RECOMENDAÇÃO DE USO! MAIS FÁCIL


//QUERY SELECTOR
const tituloNhoque = document.querySelector('#card_nhoque h3') //pega o elemento igual no css, usando # pro id dele

const botoesCompra = document.querySelectorAll(".btn_pedido") //chama vários elementos selectorAll

const terceiroCard = document.querySelector('.card:nth-child(2)') //exatamente como é no css, o pseudoseletor é esse q usa :, NÃO PODE TER ESPAÇO ENTRE AS PALAVRAS E O :

console.log('1. Mostrando o título Nhoque pelo ID', tituloNhoque)
console.log('2. Quantidade de botões de pedido', botoesCompra.length) //mostrar a quantidade de botões
console.log('2. Quantidade de botões de pedido', botoesCompra)

console.log('3. Terceiro card de uma class', terceiroCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas_vindas')
const seuNome = document.querySelector('#nome')

saudacao.textContent = hora < 18 && hora > 12 ? 'Bem vindo! boa tarde!' : hora > 18 && hora < 24 ? 'Bem vindo! boa noite!' : 'Bem vindo! Bom dia!'

seuNome.innerHTML="<strong>Meu nome é Celso</strong>" //TEM QUE SER TUDO ENTRE ASPAS
