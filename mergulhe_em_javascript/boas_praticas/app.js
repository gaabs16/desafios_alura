// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

let mensagem = console.log('boas vindas');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'gabriella';
console.log(`Olá, ${nome}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = 'gabriella';
alert(`Olá, ${nome}`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;

console.log(`a soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 30;
let valor2 = 20;
let resultado = valor1 - valor2;

console.log(`a diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = parseInt(prompt('qual sua idade?'));

if (idade >= 18){
    console.log('maior de idade :) ');
}else{
    console.log('menor de idade!!!');
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('digite um numero');

if (numero > 0){
    console.log('o numero é positivo');
}else if(numero < 0){
    console.log('numero é negativo');
}else{
    console.log('o numero é zero');
}

// Use um loop while para imprimir os números de 1 a 10 no console.

let numeros = 1;

while(numeros < 10){
    console.log(numeros);
    numeros++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 10;

if (nota >= 7){
    console.log('o aluno esta aprovado');
}else{
    console.log('o aluno esta reprovado');
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

console.log((Math.random()));

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numeroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio);
