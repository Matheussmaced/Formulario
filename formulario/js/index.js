function meuEscopo() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<h2>Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value}.<br> Idade: ${idade.value} anos.</h2>`

    }


    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();