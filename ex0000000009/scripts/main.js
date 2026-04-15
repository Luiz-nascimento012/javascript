var botao = document.querySelector("button.dark-mode")
var corpo = document.body

botao.addEventListener('click', () => {
    corpo.classList.toggle('escuro')

    if(
        corpo.classList.contains('escuro')
    ) {
        botao.innerHTML = '<i class="fa-regular fa-sun"></i>'
    } else {
        botao.innerHTML = '<i class="fa-regular fa-moon"></i>'
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const temasalvo = localStorage.getItem('tema')

    if (temasalvo === 'escuro') {
        corpo.classList.add('escuro')
        botao.innerHTML = '<i class="fa-regular fa-sun"></i>'
    } else {
        botao.innerHTML = '<i class="fa-regular fa-moon"></i>'
    }
})


