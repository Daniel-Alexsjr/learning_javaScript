const animais = document.getElementById('animais')
//console.log(animais.innerText)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)


// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img')
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensComImagem = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(imagensComImagem)
// Selecione todos os links internos (onde o href começa com #)
const todosLinkInterno = document.querySelectorAll('[href^="#"]')

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2.innerText)
// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length -1])