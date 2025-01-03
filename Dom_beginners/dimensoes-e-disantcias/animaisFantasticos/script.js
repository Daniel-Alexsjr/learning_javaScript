const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
console.log(height)

console.log(
    window.innerWidth,
    window.outerWidth
)

const small = window.matchMedia('(width<600px)').matches

if(small){
    console.log('usuário mobile');
} else{
    console.log('usuário desktop')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img')
console.log(primeiraImg.offsetTop)

// Retorne a soma da largura de todas as imagens
function somaImgs(){

    const imagens = document.querySelectorAll('img')    

    let soma = 0;
    imagens.forEach((imagem)=>{
        soma = soma + imagem.offsetWidth;
    })

    console.log(soma)
}

window.onload = function(){
    somaImgs()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link)=>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'possui acessibilidade')
    } else{
        console.log(link, 'nao possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}