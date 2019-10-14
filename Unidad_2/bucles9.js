var tamano = parseInt(prompt('Introduzca el tamaño del triangulo'));
var i = 1;
var j = "*";
var k = "$";

if (tamano < 2) {
    do {
        alert('El tamaño del triángulo debe ser mayor o igual a dos');
        tamano = parseInt(prompt('Introduzca el tamaño del triangulo'));
    }
    while (tamano < 2);
    for (i=1; i <= tamano; i++) {
        console.log(j.repeat(i));
    }
    console.log('');
    for (i=tamano; i>=0; i--) {
        console.log(j.repeat(i));
    }
    console.log('');
    for (i=1; i<=tamano; i++) {
        console.log(k.repeat(tamano-i) + j.repeat(i));
    }
    console.log('');
    for (i=tamano; i>=0; i--) {
        console.log(k.repeat(tamano-i) + j.repeat(i));
    }
    console.log('');
    for (i=1; i<=tamano; i++) {
        console.log(k.repeat((tamano+i)/2) + j.repeat(i));
    }
} else {
    for (i=1; i <= tamano; i++) {
        console.log(j.repeat(i));
    }
    console.log('');
    for (i=tamano; i>=0; i--) {
        console.log(j.repeat(i));
    }
    console.log('');
    for (i=1; i<=tamano; i++) {
        console.log(k.repeat(tamano-i) + j.repeat(i));
    }
    console.log('');
    for (i=tamano; i>=0; i--) {
        console.log(k.repeat(tamano-i) + j.repeat(i));
    }
    console.log('');
    for (i=1; i<=tamano; i++) {
        console.log(k.repeat((tamano+i)/2) + j.repeat(i));
    }
}