// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = document.querySelector('dt')

console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
