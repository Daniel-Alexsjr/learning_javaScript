const img = document.querySelector('img');

function callback(event){
    console.log(event.target)
}


img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget); //retornar o ul
    console.log(event.target); //retornar o elemento cliacado, img
    console.log(event.type); //retorna o tipo de evento
}

animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault();

    console.log(event.currentTarget);
    console.log(this.getAttribute('href'));
    console.log('link externo');


}

linkExterno.addEventListener('click', handleLinkExterno)




// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleClick(event){
    event.preventDefault()
    linksInternos.forEach((link)=>{
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}


linksInternos.forEach((link)=>{
    link.addEventListener('click', handleClick)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')

function handleElemento(event){
    console.log(event.currentTarget)
}

todosElementos.forEach((elemento)=>{
    elemento.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

//function handleElemento(event){
   // event.currentTarget.remove()
//}


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event){
    console.log(event.key)
    if(event.key ==='t'){
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleClickT)