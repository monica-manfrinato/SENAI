//DOM ANTIGO QUE NÃO É RECOMENDADO, MAS PODE APARECER

//NESSA DEFINIÇÃO, PEGAMOS A INFORMAÇÃO
const topo = document.getElementById('topo_loja') //define a constante topo com o elemento que tem id igual a topo_loja

const links = document.getElementsByTagName('a') //vai pegar os elementos que tem a tag <a> no documento

const listaCards = document.getElementsByClassName('card')//define a constante listarCard com os elementos que tem classe igual a 'card'


//PARA MOSTRAR A TAG

console.log("1. Elemento topo:", topo)
console.log("2. Primeiro card da lista", listaCards[0])
console.log("3. A lista completa de links", links)
console.log('4. O endereço (URL) do primeiro link', links[0].href)
console.log("5. A cor do cabeçalho:", topo.style.backgroundColor) //o topo vai no style e do style vai no background color pra pegar a cor
