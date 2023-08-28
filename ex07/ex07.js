texto = prompt("Insira um texto: ");

letra = prompt("Isira uma letra: ");
letraMaiuscula = letra.toUpperCase();

palavras = texto.split(" ");

palavraInicial = [];

for(i = 0; i < palavras.length; i++){
    palavraMinuscula = palavras[i].toLowerCase();
    letraMinuscula = letra.toLowerCase();

    if(palavraMinuscula.startsWith(letraMinuscula)){
        palavraInicial.push(palavras[i]);
    }
}

document.write(`<h1>Palavras Iniciadas com a Letra "${letraMaiuscula}":</h1>`);
document.write("<p>" + palavraInicial.join(" ") + "</p>");