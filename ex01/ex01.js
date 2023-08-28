nome = prompt("Digite seu primeiro nome:");
sobrenome = prompt("Digite seu sobrenome:");
n = prompt("Digite a quantidade de vezes que seu nome será exibido: ");

r = prompt('Degite o valor de R entre [0,255]');
g = prompt('Degite o valor de G entre [0,255]');
b = prompt('Degite o valor de B entre [0,255]');

rgb = `rgb(${r}, ${g}, ${b})`;

for(i = 0; i < n; i++){

    cor = i % 2 === 0 ? 'black' : rgb;

    document.write(`<p style="color: ${cor}">${nome} ${sobrenome}</p>`)
}