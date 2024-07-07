// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosBrasilCopa = ["1959", "1962", "1970", "1994", "2002"]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < anosBrasilCopa.length; i++){
    console.log(`O brasil ganhou a copa de ${anosBrasilCopa[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var j = 0; j < frutas.length; j++){
    console.log(frutas[j])
    if(frutas[j] === 'Pera'){
        break;
    }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length-1]