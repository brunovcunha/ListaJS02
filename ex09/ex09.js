texto = prompt("Insira um texto: ");

texto = texto.toLowerCase().replace(/\s/g, '');

palindromo = texto.split('').reverse().join('');

if(texto === palindromo){
    alert("O texto é um palíndromo.");
}else{
    alert("O texto não é um palíndromo.");
}

