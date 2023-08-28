valorDec = prompt("Insira um valor inteiro positivo maior ou igual a 2: ");

while(valorDec < 2){
    alert("Insira um valor inteiro positivo maior ou igual a 2 !!");
    
    valorDec = prompt("Insira um valor inteiro positivo maior ou igual a 2: ");
}

document.write('<style>');
document.write('table {');
document.write('  border-collapse: collapse;');
document.write('  width: 50%;');
document.write('  margin: 20px auto;');
document.write('}');
document.write('th, td {');
document.write('  border: 1px solid #ccc;');
document.write('  padding: 8px;');
document.write('  text-align: center;');
document.write('}');
document.write('th {');
document.write('  background-color: #f2f2f2;');
document.write('}');
document.write('</style>');

tabelaHTML = "<table><tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr>";

for(i = 0; i <= valorDec; i++){
    binario = i.toString(2); 
    hexadecimal = i.toString(16);

    tabelaHTML += "<tr><td>" + i + "</td><td>" + binario + "</td><td>" + hexadecimal + "</td></tr>";
}

document.write(`${tabelaHTML}`);

