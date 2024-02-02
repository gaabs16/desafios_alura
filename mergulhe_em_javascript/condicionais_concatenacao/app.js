// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let semana = prompt('qual dia da semana?');

// sabado e domingo como aspas porque sao strings

if (semana == "sabado" || semana == "domingo") {
    alert('bom fim de semana!!');
} else {
    alert('boa semana');
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = parseFloat(prompt('digite um numero'));

if (numero > 0) {
    alert('numero positivo');
} else if (numero < 0) {
    alert('numero negativo');
} else {
    alert('numero é zero');
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar."

let pontuacao = parseInt(prompt("Digite sua pontuação:"));

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 500;
alert(`Seu saldo atual é de R$ ${saldo}.`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('digite seu nome');
alert(`Boas vindas ${nome}`);