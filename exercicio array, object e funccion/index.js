function meuEscopo(){
    const form = document.querySelector('.form'); // maneira moderna para selecionar algo no meu HTML só dizer o nome da constante e document.querySelector('Classe que você quer')   
    const resultado = document.querySelector('.resultado');


    const pessoas = [];

                                  //primeiro metodo (não muito moderno) para fazer um evento
  //  form.onsubmit = function(evento){  //estou pedindo para que ocorra um evento no botão submit(enviar)
  //      evento.preventDefault(); // Está pedindo para o navegador previnir oque era para acontecer por padrão (atualizar pagina)
  //      alert('Enviado'); // quando o formulario for enviado tem que aparece um alerta
  //      console.log('Foi enviado');
  //  };

                                    //segundo metodo(mais moderno)  para fazer um evento
  
    function recebeEventoForm (evento){ // cria uma função e dê o nome a ela e uma const ()
        evento.preventDefault(); // só escrever o nome do evento.preventDeafault()


        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    }
    
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();