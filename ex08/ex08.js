
texto = prompt("Insira um texto: ");

palavras = texto.split(" ");

palavrasPorLetra = {};

for (i = 0; i < palavras.length; i++) {
    palavra = palavras[i].toLowerCase();
    primeiraLetra = palavra[0];

    if (!palavrasPorLetra[primeiraLetra]) {
        palavrasPorLetra[primeiraLetra] = [];
    }

    palavrasPorLetra[primeiraLetra].push(palavras[i]);
}

letrasOrdenadas = Object.keys(palavrasPorLetra).sort();

for (j = 0; j < letrasOrdenadas.length; j++) {
    letra = letrasOrdenadas[j].toUpperCase();
    palavraInicial = palavrasPorLetra[letrasOrdenadas[j]];

    document.write(`<p>Palavras com a letra "${letra}":</p>`);

    for(k = 0; k < palavraInicial.length; k++){
        document.write(`<li>${palavraInicial[k]}</li>`);
    }
}
