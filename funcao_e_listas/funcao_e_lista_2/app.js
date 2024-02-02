// Criar uma função que exibe "Olá, mundo!" no console.

function exibir(){
    console.log("hello world");
}

exibir();

// Criar uma função que recebe um nome como parâmetro e exibe
// "Olá, [nome]!" no console.

function nome(){
    let nome = ('gabriella')
    console.log(`Olá, ${nome}`)
}

nome();

// Criar uma função que recebe um número como parâmetro 
// e retorna o dobro desse número.

function numero(){
    let numero = 3
    let dobro = numero * 2
    console.log(`o dobro desse numero é ${dobro}`)
}

numero();

// outro jeito
function dobra (n, m){
    return console.log(n*m)
}

dobra (2,3)
dobra (4,5)

// Criar uma função que recebe três números como parâmetros 
// e retorna a média deles.

function media(a,b,c){
    return console.log((a+b+c)/3)
}

media(3,4,5);

// Criar uma função que recebe dois números como parâmetros 
// e retorna o maior deles.

function numero(n, m){
    if (n > m){
        console.log(`o ${n} é maior`)
    }else if (n < m){
        console.log(`o ${m} é meior`)
    }else{
        console.log('são iguais')
    }
}

numero(8,10);

// Criar uma função que recebe um número como parâmetro 
// e retorna o resultado da multiplicação desse número por ele mesmo

function numero(a){
    return console.log(a*a);
}

numero(5);


