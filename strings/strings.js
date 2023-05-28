//               0123456789    as strings tem indices que podem ser exibido no console.log(nome da variavel [3]);
let umaString = 'Um \'texto\''; // posso abrir aspas duplas para abrir e dentro do texto, mas preciso adicionar barra invertida para poder usar
let umaString2 = 'um \\texto'; // Caso eu queira usar uma barra invertida dentro da string, preciso adicionar duas barras invertidas


console.log(umaString[5]);

console.log(umaString.charAt(5)); // Outra forma de ver o indice

console.log(umaString.concat('em ', 'um ', 'lindo ', 'dia ')); //concatenando strings
console.log(umaString + 'em um lindo dia.'); //concatenando strings
console.log(`${umaString} em um lindo dia`);// concatenando strings

console.log(umaString.indexOf('texto')); // para saber em qual indice começa o meu texto
console.log(umaString.lastIndexOf('texto')) // começa do final e vai até o começo

//Expressão regular

console.log(umaString.match(/[a-z]/g)); 
console.log(umaString.search(/x/)); // Ele retorna o indice
console.log(umaString.replace('Um','Outra')); // Substituir uma string
console.log(umaString.replace(/x/,'$')); // substitui somente uma letra
console.log(umaString.replace(/x/g,'$')); // colocando o g ele repete em todos os x

//fatiamento

console.log(umaString.length); // Vê o tamanho da string
console.log(umaString.slice(2, 6)); // fatia a minha string
console.log(umaString.substring(umaString.length - 5)); // de tras pra frente

//divisão de string

console.log(umaString.split('')); // divide conforme você coloca pra separar
console.log(umaString.split('x')); // divide conforme você coloca pra separar


console.log(umaString.toUpperCase()); //TUDO MAISCULO
console.log(umaString.toLocaleLowerCase()); // tudo minusculo