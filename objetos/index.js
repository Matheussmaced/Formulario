// const pessoa1 = [] //array

const pessoa2 ={     // objeto
    nome: 'Matheus',
    sobrenome: 'Gregorio',
    idade: 22
};

console.log(pessoa2.nome); // acesso só ao primeiro nome
console.log(pessoa2.sobrenome); // acesso ao sobrenome
console.log(pessoa2.idade); // acesso a idade

function criaPessoa (nome, sobrenome, idade){  // Nome, sobrenome e idade são parametros // essa função é chamada de facture, essa função cria objetos
    return {
        nome: nome, // quando é nome: nome posso somente escreve esse retorno dessa forma: nome
        sobrenome: sobrenome, // quando é nome: sobrenome posso somente escreve esse retorno dessa forma: sobrenome
        idade: idade // quando é nome: idade posso somente escreve esse retorno dessa forma: idade. Ou nome, sobrenome, idade
    };
};

const pessoa1 = criaPessoa ('Matheus', 'Gregorio', 22);  // as strings com matheus gregorio 22 são arguntos, argumentos passa o valor para os parametros
const pessoa3 = criaPessoa ('Aparecida', 'Silva', 21);
console.log(pessoa1.nome, pessoa3.nome)


const pessoa4 = {
    nome: 'Matheus',
    sobrenome: 'Gregorio',
    idade: 22,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi...`); // estou pegando os valores do objeto e juntando
        console.log(`Minha idade atual é ${this.idade}`); // vai falar a idade
    },

    incrimentaIdade(){ // vai adicionar mais um na idade
        this.idade++
    }
}

pessoa4.fala();
pessoa4.incrimentaIdade(); // vai adicionar mais um na idade
pessoa4.fala(); // vai falar a idade