var soma = document.querySelector('input.bota')

soma.addEventListener('click', somar)

function somar() {
    var tn1 = window.document.querySelector('input#txt1')
    var tn2 = window.document.querySelector('input#txt2')
    var res = window.document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2

    res.innerHTML = `o resultado da soma de ${n1} e ${n2} é de: ${s}.`

}