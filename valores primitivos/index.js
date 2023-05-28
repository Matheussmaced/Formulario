// Valores Primitivos (Imutáveis) - Strings, number, boolean, underfined, null (bigintm symbol) - Valor

let a = 'A';
let b = a; // Copia, só é considerado copia quando o valor é primitivo
console.log(a,b);

a = 'Qualquer coisa';
console.log(a,b); // ele só mudará a variavel a, e b continuará sendo a copia do primeiro A // valores copiados


// Referência (mutável) - array, object, function //valores que mudam // passados por referencia

let c = [1,2,3];
let d = c;
console.log(c, d); // não é uma copia, quando é referencia, nesse caso o d está apontando para c e caso eu mude o C o D também será afetado

c.push(4); // adicionei mais um numero no array
console.log(c, d); // o d também foi afetado

d.pop(); //estou tirando um numero do array do d
console.log(c, d); // o c também foi afetado

//caso eu queira faz uma copía e deixar o valor independente, faço o seguinte:

let e = [...c]; // o valor de c atual foi copiado para e, então ele não é alterado
console.log(c);

c.pop();
console.log(d,e); // o e não foi alterado



