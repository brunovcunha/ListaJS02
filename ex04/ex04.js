nome = prompt("Informe seu nome completo: ");

nome = nome.toLowerCase();

nome = nome.split(" ");

nome[0] = nome[0].toUpperCase();

nomeCompleto = nome.join(" ");

alert(`Seu nome em letras maiúsculas e sobrenome em letras minúsculas: ${nomeCompleto}`);
