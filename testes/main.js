var bloco1 = document.querySelector('div.p1')

bloco1.addEventListener('click', clicar)

var bloco2 = document.querySelector('div.p2')

bloco2.addEventListener('click', clicar02)

function clicar() {
    bloco1.innerHTML = 'morra!'
    bloco1.style.background = 'red'
}

function clicar02() {
    bloco2.innerHTML = 'viva!'
    bloco2.style.background = 'green'
}



