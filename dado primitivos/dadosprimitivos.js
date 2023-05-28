// string, number, undefined, null, bolean, symbol

const nome = 'Matheus'; // String
const nome1 = 'Matheus'; // string
const nome2 = 'Matheus'; // string
const num1 = 10; // Number
const num2 = 10.51; // Number flutuante

let nomeAluno; // Undefined = Não aponta pra local nenhum na memoria
const sobrenomeAluno = null; // Null = nulo -> Não aponta pra local nenhum na memoria, se usa para desconfigurar uma variavel (colocar o valor como nulo)
const boolean = true; // boolean = pode ser true ou false (valor lógico)

let a = [1,2]; 
const b = a; // valor de a foi copiado para o valor de b

console.log(a,b); // a = 1,2 b= 1,2
 
a = 3;
console.log (a,b); // a= 3, b= 1,2

