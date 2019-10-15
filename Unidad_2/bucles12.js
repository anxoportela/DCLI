var prestamo = prompt("Introduzca la cantidad del prestamo", 0);
var duracion = prompt("Introduzca los años para amortizar el prestamo", 0);
const interes = 0.05;

var cuota;
var amortizado;
var intereses;

var tabla = '<table border="1"><th><td></td><td></td><td>' + prestamo + '</<td>';

for (let i = duracion; i >= 1; i--) {
    cuota = (prestamo * interes) / (1 - Math.pow((1 + interes), -(i)));
    amortizado = cuota - (interes * prestamo);
    intereses = cuota - amortizado;
    prestamo = prestamo - cuota + intereses;

    tabla += '<tr><td>' + cuota.toFixed(2) + '</td>';
    tabla += '<td>' + intereses.toFixed(2) + '</td>';
    tabla += '<td>' + amortizado.toFixed(2) + '</td>';
    tabla += '<td>' + prestamo.toFixed(2) + '</td>';
    tabla += '</tr>';

}

tabla += '</table>';

document.body.innerHTML = tabla;