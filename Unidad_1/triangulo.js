var base = prompt('Introduzca la base del triángulo:', 0);
var altura = prompt('Introduzca la altura del triángulo:', 0);

if (isNaN(base) || isNaN(altura)) {
    alert('Introduzca valores numéricos');
} else {
    alert((base * altura) / 2);
}