var tt = "hello world";

tt = tt.replace('hello', 'die')

console.log(tt)

// nomeie 3 propriedades ou métodos de strings
tt.length
tt.toLocaleLowerCase()
tt.concat()

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

document.getElementById('copyButton').addEventListener('click', function(){
    const selectedText = window.getSelection().toString();

    if(selectedText){
        navigator.clipboard.writeText(selectedText).then(() => {
            alert('texto copiado')
        })
        .catch(err => {
            console.error("error copyinh text: ", err);
        });
    }else{
        alert('no text selected.');
    }
});