// IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number
// maneira dois de se resolver

//num1 =((num1 * 100) + (num2 * 100)) /100 ; // 0.8
//num1 =((num1 * 100) + (num2 * 100)) /100 ; // 0.9
//num1 =((num1 * 100) + (num2 * 100)) /100 ; // 1 

num1 = Number(num1.toFixed(2)); // quando houver uma impressiso ele resolverá e deixará somente 2 casas decimais


// aqui acaba o maneira dois e entra a maneira um

// num1 += num2; // num1 = num1 + num2;  0.8
// num1 += num2; // 0.9;
// num1 += num2; // 1;

// num1 = parseFloat (num1.toFixed(2)); // para resolver o problema de numero quebrado, posso usar number ao inves de parsefloat

console.log(num1);
console.log (Number.isInteger(num1));


//  console.log(num1 + num2);
// caso eu queira tranformar temporariamente o num1 em string eu utilizo:

//  console.log(num1.toString() + num2);

//  num1 = num1.toString(); // transforma permanentemente o numero em string

//  console.log(typeof num1);
//  console.log(num1.toString(2)); // Representação binaria da string

//  console.log(num1.toFixed(2)); // Arrendodar um numero quebrado, () serve para a quantidade de casas décimais

//  console.log(Number.isInteger(num1)); // ele verifica se o numero é um inteiro ou não

//  let temp = num1 + '5';
//  console.log(Number.isNaN(temp)); // descobrir se a conta é um NaN, true pra caso for um NaN e False se não for NaN

