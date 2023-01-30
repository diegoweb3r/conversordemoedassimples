var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var valorConvertido = valorEmDolar * cotacaoDoDolar;
var nome = prompt("Oi, qual é o seu nome?");

valorConvertido = valorConvertido.toFixed(2);

alert('Oi, ' + nome + '. O valor convertido é' + ' R$ ' + valorConvertido);