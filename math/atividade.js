const numero = Number(prompt('Digite um numero')); // transformar em number, só envolver em Number()

// quuando se mexe no doccument está mexendo com o dom

const numeroTitulo = document.getElementById('numero-titulo'); // quero obter um elemento por ID é um metodo, estou pedindo para o elemento que está na html ser selecionado
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = ''; // ele vai limpar minha div
texto.innerHTML = `<p> Raiz quadrada: <strong>${numero ** 0.5}</strong> </p>`;
texto.innerHTML += `<p> ${numero} inteiro: <strong>${Number.isInteger(numero)}</strong> </p>`;
texto.innerHTML += `<p> é NaN: <strong>${Number.isNaN(numero)}</strong> </p>`;
texto.innerHTML += `<p> Arredondamento para baixo: <strong>${Math.floor(numero)}</strong> </p>`;
texto.innerHTML += `<p> Arredondamento para cima: <strong>${Math.ceil(numero)}</strong> </p>`;
texto.innerHTML += `<p> Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> </p>`;







