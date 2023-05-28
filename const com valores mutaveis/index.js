const nome = 'Matheus';

// Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo

// Valores que são imutáveis (Não pode mudar) : number ; strings ; bolean ; underfined ; null ; symbol e bigint (Os primitivos todos são imutaveis) imutaveis eles só podem armazenar um valor
// Valores que são mutáveis (Que podem mudar) : arrays, let, var

// Quando usamos const com tipos primitivos esse valor não mais poderá ser alterado
// Quando usamos const com valores mutáveis (arrays e objetos) a variavel ainda continua sendo constante porem os valores dentro do obejtos poderam sofrer alteração


// isso pode: 0 1 2 3 4
const array = [1,2,3,4,5];
array.pop();
array[4] = 1024 // estou escolhendo qual array modificar
console.log(array);

// isso não pode:
const array = [1,2,3,4,5];
array = 'Legal';// pq não estou modificado um elemento que está dentro do array, estou tentando modificar a constante array
console.log(array); 