const img1 = document.querySelectorAll('img');
console.log(img1)

let ii = 0

img1.forEach(()=>{
    console.log(ii++)
})

img1.forEach(function(item, index, array){
    // console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});



// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item)=>{
    console.log(item);
})


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( ()=> {
  console.log(i++);
});

imgs.forEach(() => i++);

