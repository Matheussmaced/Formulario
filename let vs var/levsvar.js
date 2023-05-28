// ECMAScript 2015 (ES6) padronização da linguagem js

var nome = 'Matheus';
var nome = 'Gregorio';
// no var tenho que escrever var para modificar a variavel, diferente do let que é só declarar o valor

nomeExemplo = 'João'; // NÃO FAZER ISSO, POIS CRIA UMA VARIAVEL GLOBAL QUE PODE AFETAR O CODIGO, SEMPRE DECLARAR SE É VAR OU LET

let nomeCachorro = 'Ralf'
nomeCachorro = 'Ralfinho'

// No let posso redeclarar a variavel sem usar o let

console.log(nome, 'é dono de', nomeCachorro);
// Ou 
console.log(`${nome} é dono de ${nomeCachorro}`) //Template de string