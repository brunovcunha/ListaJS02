texto = prompt("Insira um texto: ");

textoVetor= texto.split(" "); 
total = textoVetor.length; 

document.write(`<p>Total de palavras = ${total}</p>`);