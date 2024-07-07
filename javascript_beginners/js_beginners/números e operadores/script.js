// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

console.log(total) // Resultado = 35

// Crie duas expressões que retornem NaN
var unidade = 'L'
var copo1 = 100;
var copo2 = 200;

var copo1L = copo1 + unidade;
var copo2L = copo2 + unidade;

var mg = 20;

var densidade1 = mg / copo1L
var densidade2 = mg / copo2L

console.log(densidade1)
console.log(densidade2)


// Somar a string '200' com o número 50 e retornar 250
var n1 = '200';
var n2 = 50

var total = +n1 + n2
console.log(total)

// Incremente o número 5 e retorne o seu valor incrementado

// Como dividir o peso por 2?
var pesoPessoa = '80';
var unidade = 'kg';
var pesoPorDois = pesoPessoa / 2; // NaN (Not a Number)
var peso = pesoPorDois + unidade; // '80kg'

console.log(peso)