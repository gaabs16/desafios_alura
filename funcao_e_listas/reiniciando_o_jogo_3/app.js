// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso){
    let calcule = peso/(altura*altura);
    return console.log('seu imc é: ', calcule.toFixed(1));
}

imc(1.60, 60);

// Crie uma função que calcule o valor do fatorial 
// de um número passado como parâmetro.

function fatorial(n){
    let calcule = n;
    for (let i = 1; i < n ; i++) {
        calcule *= (n - i);
    }
    return console.log('o fatorial é: ', calcule);
}

fatorial(4);

// Crie uma função que converte um valor em dólar, 
// passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.

function dolar(n){
    let numero = (n*4.80)
    return console.log('o valor em reias é: ', numero);
}

dolar(5.00);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.

function calculo(altura, largura){
    let area = (altura*largura);
    let perimetro = (altura*largura*altura*largura);
    return console.log(`o valor da area é ${area} e do perimetro é ${perimetro}` );
}

calculo(9,7);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculo(raio){
    let area = (3.14*(raio*raio));
    let perimetro = (2*3.14*raio);
    return console.log(`o valor da area é ${area} e do perimetro é ${perimetro}`);
}

calculo(3);

// Crie uma função que mostre na tela 
// a tabuada de um número dado como parâmetro.

function tabuada(n){
    let calcule = n;
    for (let i = 1; i <= 10; i++) {
        calcule = n * i;
    }
    return console.log('o valor da tabuada é: ', calcule);
}

tabuada(2);

function exibirTabuada(numero) {
    // Loop de 1 a 10 para exibir a tabuada
    for (var i = 1; i <= 10; i++) {
      // Calcular o produto e exibir na tela
      var produto = numero * i;
      console.log(numero + " x " + i + " = " + produto);
    }
  }
  
  // Exemplo de uso: mostrar a tabuada do número 7
  exibirTabuada(7);