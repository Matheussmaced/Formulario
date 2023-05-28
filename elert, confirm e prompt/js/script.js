//alert('Olá mundo!'); // caixinha no navegador, faz um alerta
//confirm('deseja realmente continuar?'); //mensagem de confirmação
//prompt('Digite o seu nome:'); // Prompt onde o usuario pode escrever algo

//const confirma = confirm('Realmente deseja apagar?'); // a constante confirmar irá atribuir o valor que o usuario apertar na caixa, se for ok será true, se for cancelar será false

let num1 = prompt('Digite um numero'); // o valor que o usuario digitar será armazenado nessa variavel num1

let num2 = prompt ('digite outro numero');

num1 = parseFloat(num1); // transformar string em numero
num2 = parseFloat(num2);

const resultado = num1 + num2;
num1 = parseFloat(num1);
num2 = parseFloat(num2);
alert('resultado foi: ' + resultado );

