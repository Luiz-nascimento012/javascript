/*var bota = document.querySelector('button.text')
var para = document.querySelector('p')

bota.addEventListener('click', () => {
    para.innerHTML = "Olá, minha PICA!!!!"

    console.log(para, bota)
})*/


/*var bota = document.querySelector('button.text-summoner')

bota.addEventListener('click', () => {
    var rota = document.querySelector('div.rota')
    var texto = document.querySelector('p.resto')
    rota.classList.toggle('row')
    if(texto.style.display === 'inline') {
        texto.style.display = 'none'
    } else(texto.style.display = 'inline')

    console.log('')
})*/

var botoes = document.querySelectorAll('button.text-summoner')

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    var rota = botao.closest('.rota')
    var texto = rota.querySelector('.resto')

    rota.classList.toggle('row')

    if (texto.style.display === 'inline') {
      texto.style.display = 'none'
    } else {
      texto.style.display = 'inline'
    }
  })
})