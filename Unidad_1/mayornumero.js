var num1 = prompt('Introduzca el primer número');
var num2 = prompt('Introduzca el segundo número');
var num3 = prompt('Introduzca el tercer número');

if (num1 > num2 && num1 > num3) {
    alert(num1 + " es el más grade");
} else if (num2 > num3) {
    alert(num2 + " es el más grade");
} else {
    alert(num3 + " es el más grade");
}