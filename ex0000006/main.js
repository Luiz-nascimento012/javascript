var a = window.document.querySelector('div#area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'MORRA!'
    a.style.background = 'darkred'
    a.style.color = 'black'
}

function entrar() {
    a.style.background = 'black'
    a.innerText = 'entrou!'
    a.style.color = 'white'
}

function sair() {
    a.style.background = 'green'
    a.innerText = 'saiu!'
    a.style.color = 'white'
}