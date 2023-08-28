texto = prompt("Insira um texto: ");

primeiraPalavra = prompt("Informe a primeira palavra:")
segundaPalavra = prompt("Informe a segunda palavra: ");

novoTexto = texto.replaceAll(`${primeiraPalavra}`, `${segundaPalavra}`);

alert(`Mensagem final: ${novoTexto}`);

