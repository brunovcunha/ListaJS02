texto = prompt("Insira um texto: ");

textoVetor= texto.split(" "); 

concatenar = textoVetor[0] + " " + textoVetor
[textoVetor.length - 1];

document.write(`<h1>${concatenar}</h1>`);
