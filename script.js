a = 10;
b = 100;
var ad = 10 + 100; // Supondo que você tenha esses valores
var sub = 10 - 100;
var div = 10 / 100;
var mult = 10 * 100;

var num5 = 5;


document.addEventListener('DOMContentLoaded', function() {
    //Exercício 01 - Crie duas variáveis com o valor 10 e 100. Mostre o valor da soma, subtração, divisão e multiplicação em um ALERT.
function Exercicio1() {

    alert('Exercicio 1' + '\nSoma: ' + ad + '\nSubtração: ' + sub + '\nDivisão: ' + div + '\nMultiplicação: ' + mult);
}
var exc1 = document.getElementById("exercicio1");
exc1.addEventListener('click', Exercicio1);


//Exercício 02 - Crie um loop que mostre na tela o valor de 10 a 100.
function Exercicio2() {
    for (var i = 10; i <= 100; i++) {
        document.write(i + ", ");
    }
}
var exc2 = document.getElementById("exercicio2");
exc2.addEventListener('click', Exercicio2);

//Exercício 03 - Crie uma variável que recebe o valor fixo 5. Mostre a tabuada desse número.
function Exercicio3(){
    for (var i = 1; i <= 10; i++){
        document.write(num5 + 'x' + i + ' = ' + (num5 * i) + '<br>');

    }
}
var exc3 = document.getElementById("exercicio3");
exc3.addEventListener('click', Exercicio3);


//Exercício 04 - Adapte o exercício anterior para o valor não ser mais fixo. O valor deve ser recebido de um campo da tela.
function Exercicio4(){

var num = document.getElementById("input-exc4").value;
    for (var i = 1; i <= 10; i++){
        document.write(num + 'x' + i + ' = ' + (num * i) + '<br>');

    }
}
var exc4 = document.getElementById("exercicio4");
exc4.addEventListener('click', Exercicio4);

//Exercício 5 -
function calcular() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operador = document.getElementById('operador').value;
    var resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            resultado = 'Operador inválido';
    }

    alert('Resultado: ' + resultado);
}

document.getElementById('calcularBtn').addEventListener('click', calcular);

//Exercício 6 
var numeros = [1,2,3,4,5,6,7,8,9,10];

function Par(){
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            document.write(numeros[i] + '<br>');
        }
    }

}
document.getElementById('exercicio6').addEventListener('click', Par);

//Exercício 7
document.getElementById('calcularCusto').addEventListener('click', function() {
    var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    var percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value) / 100;
    var percImpostos = parseFloat(document.getElementById('percImpostos').value) / 100;

    var custoFinal = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos);

    document.getElementById('valorFinal').textContent = custoFinal.toFixed(2);
});

});

