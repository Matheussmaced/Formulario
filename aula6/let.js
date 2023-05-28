let nome = 'João'; // tem duas, let e var, mas var é mais antigo.  string
let esposa = 'Maria'; // string
let filho = 'Eduardo'; // string

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com', esposa, ' em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama', filho,);


let nome2; // Não acontece um erro, ela irá ser undefined (Undefined é o valor)
nome2 = 'Qualquer valor'; // Inicializando a variavel // Ela pode ser modificada
console.log(nome2);

//ex:
let nome3 = 'Francisco';
console.log(nome3);
nome3 = 'Otavio' // para alterar a variavel 'nome3' não precisa colocar let
console.log(nome3) // ela pode ser alterado no decorrer do codigo

//regras

// Não podemos criar variaveis com palavras reservadas

// let let;
// let console; 
// let if;

// Variaveis precisam ter nomes significativos

// let n = 'João';
// let n = 'Campobasededados';

// Não pode começar o nome de uma variavel com um número

// let 1nome;
// let 10nome;

// Não podem conter espaços ou traços, para colocar isso, utilizamos camelCase ( primeiro letra minuscula e o proximo nome com a letra maiscula)

// let nome-cliente;
// let nome cliente;

// Case-sensitive
// let nomeCliente = 'Luiz'; São diferentes, mesmo tendo o mesmo nome, pois C do cliente está maiuscula e a outra esta minuscula
// let nomecliente = 'Otavio';

//Não podemos redeclarar variaveis com let

// let nome3 = 'Francisco';
// console.log(nome3);
// nome3 = 'Otavio'
// console.log(nome3)
