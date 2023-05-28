// Não podemos criar const com palavras reservadas

// const precisam ter nomes significativos

// Não pode começar o nome de uma const com um número

// Não podem conter espaços ou traços, para colocar isso, utilizamos camelCase ( primeiro letra minuscula e o proximo nome com a letra maiscula)

// Case-sensitive

//Não podemos redeclarar variaveis com const

// const nome; // não posso fazer isso, tenho que sempre adicionar um valor diferente do let

const nomeexemplo = 'João';
// nome = 'Otavio' // Não posso fazer isso

const primeiroNumero = 5; //number
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultadoDuplicado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //Modifiquei a let de resultado triplicado colocando + 5

// operadores aritiméticos : + - * /

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

// Tudo que está dentro de aspas é string (TEXTO)
// Tudo que está sem aspas é number (Numero)

console.log(typeof primeiroNumero); // Para saber o tipo

// Se for string usando o + ele irá juntar
// se for number usando o + ele irá somar

console.log(typeof (primeiroNumero + segundoNumero)); // Tem que envolver os dois em paranteses para saber o tipagem dela caso for mais de uma

const nome = 'Matheus'
const sobrenome = 'Gregorio'
const idade = 22;
const peso = 84;
const altura = 1.80;
let indiceMassaCorporal = peso / (altura * altura);  // peso / (altura * altura )
let anoNascimento = 2023 - idade;

// Matheus Gregorio tem 22 anos, pesa 84 kg tem 1.8 de altura e seu imc é de 25,9259
// Matheus Gregorio nasceu em 2001

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg, tem', altura + 'm de altura e seu imc é de', indiceMassaCorporal); // + serve para juntar os valores, ex peso + frase (kg)
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// Posso usar o template strings, que consiste em tirar essas virgulas e as aspas

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg, tem ${altura}m de altura e seu imc é de ${indiceMassaCorporal}`); // para usar template strings, basta envolver a string em crase e colocar ${} nas variaveis e constantes
