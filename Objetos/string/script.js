// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];


let valorTotal = 0 
let taxaTotal = 0
let totalCompras = 0

transacoes.forEach((transacao)=>{
    const possuiTaxa = transacao.descricao.includes('Taxa')
    
    
    if(possuiTaxa){
        taxaTotal += +transacao.valor.slice(3)
    } else{
        totalCompras += +transacao.valor.slice(3)
    }
    
    console.log(+transacao.valor.slice(3))
    
    valorTotal += +transacao.valor.slice(3)
})

console.log("Valor total das transações: " + valorTotal)
console.log("Taxa total das transações: " + taxaTotal)
console.log("Vendas totais: " + totalCompras)


//

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'))