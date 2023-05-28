function saudacao(nome) {          // dentro dos parentes posso adicionar um paramentro
    // console.log(`bom dia ${nome}!`); // não se faz assim, tenho que mudar o console.log para return caso eu queira adicionar alguma variavel ou constante
    return `bom dia ${nome}!`; // estou pedindo para retornar algo a minha variavel ou constante
}

const variavel = saudacao('Matheus');
console.log(variavel); // com o return que irá salvar algo para retornar para a variavel ou constante


// console.log(variavel); // assim ela não retornará nada somente com console.log dentro da função, preciso pedir para que retorne algo dentro da função



//saudacao('Matheus'); // para chamar a função / nesses parenteses posso dizer o valor do meu parametro
//saudacao('Maria'); // essa função é reutilizavel, posso adicionar outro valor a ela
//saudacao('Luiza')



// criando função útel

// function nome do que eu quero para função(oq essa função vai receber) e abre os cochetes

function soma(x, y){  // posso definir um valor padrão para x e y, caso eu não use algum parametro no console.log, dessa maneira (x=10, y=10)
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2)); // coloco o nome da função (soma) e coloco os valores que eu quero atribuir a essa função ex: (2, 2)
console.log(soma(4, 10));
console.log(soma(10, 1));


// outra maneira de fazer função

// criando com constante

const raiz = function (n){
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// arrow function consiste em remover o nome function e adicionar um =>

const raizQuadrada = n => n ** 0.5; // quando se tem somente uma linha na função, posso remover os () e os nomes funccion e return

console.log(raizQuadrada(25));

const raizQuadrada2 = (n) =>{ //modelo tradicional de arrow fuccion
    return n ** 0.5;
}

console.log(raizQuadrada2(25));









