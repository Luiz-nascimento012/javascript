/*var vel = 80

if(vel > 60) {
    console.log('você ultrapassou o limite permitido. MULTADO!!!')
}
else {
    console.log('dirija com segurança!')
}*/
    var bota = document.querySelector('input#trigger')
    bota.addEventListener('click', estranhos)
    

function estranhos() {
    var pais = document.querySelector('input#txt').value.trim()
    var res = document.querySelector('div.res')
    if(pais.toLowerCase() == 'brasil') {
        res.innerHTML = `<p>seu país é o ${pais.toLowerCase()}, você é brasileiro!</p>`
    }
    else {
        res.innerHTML = `<p>você não nasceu no Brasil, você é estrangeiro natural de ${pais.toLowerCase()}.</p>`
    }

}
