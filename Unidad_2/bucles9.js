var tamano = parseInt(prompt('Introduzca el tamaño del triangulo'));
var i = 1;
var j = "* ";

if (tamano < 2) {
    do {
        alert('El tamaño del triángulo debe ser mayor o igual a dos');
        tamano = parseInt(prompt('Introduzca el tamaño del triangulo'));
    }
    while (tamano < 2);
    for (; i <= tamano; i++) {
        console.log(j.repeat(i));
    }
} else {
    for (; i <= tamano; i++) {
        console.log(j.repeat(i));
    }
}