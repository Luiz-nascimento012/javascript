var bota = document.querySelector('div#bota')

bota.addEventListener('click', changeGradient)

function changeGradient() {
  const paragraph = document.getElementById('myParagraph');
  // Define um novo gradiente diretamente na propriedade style via JS
  // Você pode gerar gradientes aleatórios ou predefinidos
  
  const newGradient = 'linear-gradient(to right, #00ff00, #ffff00)'; // Novo gradiente (verde para amarelo)

  // Aplica o novo gradiente
  paragraph.style.backgroundImage = newGradient;
}