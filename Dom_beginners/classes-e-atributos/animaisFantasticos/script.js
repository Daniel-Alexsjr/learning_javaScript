const menu = document.querySelector('.menu')
menu.classList.add('ativo')

console.log(menu.classList)


const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');

img.setAttribute('eee','macaco do mato laranja')

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)
console.log(srcImg)

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item)=>{
    item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item)=>{
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img)=>{
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo)
})

// Modifique o href do link externo no menu
const links = document.querySelector('a[href^="http"]')
links.setAttribute('href', 'https://www.reddit.com/r/unixporn/')
console.log(links)