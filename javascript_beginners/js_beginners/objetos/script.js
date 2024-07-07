
var quadrado = {
    lados: 4,
    area(lado){
        return lado*lado
    },
    perimetro(lado){
        return this.lados*lado
    }
}

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'daniel',
    sobrenome: 'alexandre',
    idade: 28,
    profissao: 'dev',
    possuiFaculdade: false,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
var nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`
console.log(nomeCompleto)

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;

  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(homem){
        if(homem){
            return "bark bark"
        } else{
            return "zzzz"
        }
    }
}
  