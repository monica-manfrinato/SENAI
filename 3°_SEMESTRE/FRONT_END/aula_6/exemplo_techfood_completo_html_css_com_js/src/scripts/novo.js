//RECOMENDAÇÃO DE USO! MAIS FÁCIL


//QUERY SELECTOR
const tituloNhoque = document.querySelector('#card_nhoque h3') //pega o elemento igual no css, usando # pro id dele

const botoesCompra = document.querySelectorAll(".btn_pedido") //chama vários elementos selectorAll

const terceiroCard = document.querySelector('.card:nth-child(2)') //exatamente como é no css, o pseudoseletor é esse q usa :, NÃO PODE TER ESPAÇO ENTRE AS PALAVRAS E O : 
//O CARD JÁ É O FILHO, E O NÚMERO Q VAI NO PARENTESES É A POSIÇÃO DELE DENTRO DO PAI

const data = new Date()
const hora = data.getHours()
const saudacao = document.querySelector('#boas_vindas')
const seuNome = document.querySelector('#nome')

//manipulando atributos
const imagem_lasanha = document.querySelector("#foto_destaque")
const card_lasanha = document.querySelector("#card_lasanha")


console.log('1. Mostrando o título Nhoque pelo ID', tituloNhoque)
console.log('2. Quantidade de botões de pedido', botoesCompra.length) //mostrar a quantidade de botões
console.log('2. Quantidade de botões de pedido', botoesCompra)

console.log('3. Terceiro card de uma class', terceiroCard)


saudacao.textContent = hora < 18 && hora > 12 ? 'Bem vindo! boa tarde!' : hora > 18 && hora < 24 ? 'Bem vindo! boa noite!' : 'Bem vindo! Bom dia!'

seuNome.innerHTML="<strong>Meu nome é Celso</strong>" //TEM QUE SER TUDO ENTRE ASPAS
//INNER HTML é perigoso pq possibilita a ocorrência de HTML INJECTION

//QUANDO QUER ALTERAR UMA CARACTERÍSTICA ESPECÍFICA, NESSE CASO O SRC E O ALT:

// imagem_lasanha.alt = 'Produto esgotado' //muda o alt da imagem
// imagem_lasanha.src = './src/images/esgotado.jpg' //muda o caminho da imagem

//ESSES MODELO NÃO PODE FICAR SENDO UTILIZADO FREQUENTEMENTE! 

// tituloNhoque.style.color = "blue"  //<------------------------- ISSO É UM TESTE


//QUANDO FOR FAZER ALTERAÇÕES EM MAIS DE UMA COISA, UTILIZAR UMA CLASS LIST

//UTILIZANDO CLASS LIST:

//no classList, não precisamos colocar o ., pq o comando já identifica que é uma class
card_lasanha.classList.add('card_em_promocao') //<------------------------- ISSO É UM TESTE