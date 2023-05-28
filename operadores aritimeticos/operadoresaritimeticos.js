// Aritméticos + - / * ** %
// ** potenciação
// % resto da divisão
// + Adição / concatenação

let num1 = 5; // Se fosse '5' seria uma string, ele iria concatenar com o 10
let num2 = 10;

console.log(num1 + num2);

console.log(num1 - num2);

num1 = 2;
num2 = 10;

console.log(num1 ** num2); // 2 asteriscos significa potencialização

num1 = 10;
num2 = 3;

console.log (num1 % num2); // % seria o resto da divisão e se tiver o resto inteiro será 0

console.log(num1 + num1 + num2 + num2); // Posso repetir as variaveis

let num3 = 10;

console.log(num1 + num2 * num3); // a divisão será primeiro
console.log((num1 + num2) * num3); // Caso eu queira a soma primeiro, preciso envolver a soma nos parenteses

// Presedência 
// primeiro ()
// segundo **
// terceiro * / %
// quarto + -


//operador de incremento
let contador = 1; // tem que ser let
contador++; // Aqui estou pedindo para que essa variavel tenha o valor dela mais 1, então ela teria 2
contador++; // 3
contador++; // 4 // assim seria o ideal para aplicar no codigo
++contador; // 6...posso fazer dessa maneira
console.log(contador);
console.log(contador++); // ele primeiro executa o codigo e na proxima ele exibe com o contador adicionado
console.log(contador);
console.log(++contador); // ele já executa o contador adicionado

console.log(--contador); // ele irá diminuir
console.log(--contador);

// incremento = ++
// decremento = --

//operadores de atribuição 
const passo = 2;
contador = 0;
contador += passo; // contador = contador + 2
contador += passo;
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);

contador *= 2; //irá multiplicar por 2 sempre que usado
console.log(contador);
contador *= 2;
console.log(contador);

contador = 2;
contador **=2;
console.log(contador);
contador **=2; // irá potencializar por 2
console.log(contador);

//NaN - not a number parseInt (inteiro), parseFloat (decimais)
const num4 = 10
const num5 = parseInt('5'); //parseInt estamos pedindo para uma ação ser executado, nesse caso seria de conversão dessa string para um numero e retornar o valor numerico
//parseFloat analisa as casas decimas, ex: se colocasse (5.2) teria que usar parseFloat(5.2); para que esse valor fosse exibido corretamente
//Number faz a correção para numero, ex: Number (5.2);
// isso só funcionará se a string em questão for um numero, não funciona com nome
console.log(num4 + num5);
console.log(typeof num5);
