const nomeUsuario = document.querySelector('#nome-usuario')
const fotoPerfil = document.querySelector('#foto-perfil')
const corFundo = document.querySelector('#container-perfil')
const statusReal = document.getElementById('badge-status') //n precisa de # pq o comando já fala q é o ID


nomeUsuario.textContent = "Mônica Cotrim Manfrinato"
fotoPerfil.src = './src/image/foto_perfil_gatinho.jpg'
corFundo.style.backgroundColor = '#fff7f3'

if (statusReal){
    statusReal.classList.add('online')
    statusReal.textContent = 'Status: Online'
}

const qtdSkills = document.querySelectorAll('.skill')
console.log(`Você possuí ${qtdSkills.length} skills!`)