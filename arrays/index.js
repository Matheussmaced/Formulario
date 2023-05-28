// arrays seria uma lista de coisas
// string sao indexado, ex:
//            0123456
const nome = 'Matheus';
// console.log(nome[0]); // pra ver o indice desejado

// Já os arrays a cada item na lista, ele tem um valor, ex:
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']; // arrays

                                // saber o tipo
                                
// console.log(typeof alunos); // retorna como objeto, já que estamos trabalhando com arrays
// console.log(alunos instanceof Array); // se retornar true é pq estamos trabalhando de fato com arrays


                                // Fatiar
// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos.slice(0, 3)); // fatiar, quero que exiba só até joão
// console.log(alunos.slice(0, -1)); // fatiar negativo, no caso vai do 0 e para em luiza já que é contado da direita pra esquerda


                                 // remover
// alunos.shift(); // vai remover o primeiro elemento do array

// delete alunos [1]; // remove o elemento desejado sem alterar o indice 

// const removido = alunos.pop(); // essa constante serve para mostrar quem foi removido
//  alunos.pop(); // vai remover o ultimo elemento do meu array
//  console.log(alunos);
//  console.log(removido);

                            //adicionando elemento
// alunos.unshift('Luiza'); // vai adicionar um elemento no começo do meu array
// alunos.push('Otavio'); // vai adicionar um elemento no final do meu array

//console.log(alunos.length); // saber o tamanho do array
// alunos[alunos.length] = 'Luiza'; // vai aumentando mais um array
// alunos[alunos.length] = 'Fábio'; // vai aumentando mais um array
// alunos[alunos.length] = 'Luana'; // vai aumentando mais um array


// alunos[0] = 'Eduardo'; // editando um array
// alunos[3] = 'Luiza'; // Adicionando mais um array

// console.log(alunos[1]); // pra ver o indice desejado

