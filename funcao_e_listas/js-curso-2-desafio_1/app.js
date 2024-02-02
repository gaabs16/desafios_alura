let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('botao foi clicado')
}

function botaoAlerta(){
    alert('eu amo JS')
}

function botaoCidade(){
    let cidade = prompt("diga um nome de uma cidade do Brasil")
    alert(`Estive em ${cidade} e lembrei de você`)
}

function botaoSoma(){
    let numero1 = prompt("digite um numero")
    let numero2 = prompt("digite outro numero")

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 + numero2;
    alert(`o resultado é ${resultado}`);
}