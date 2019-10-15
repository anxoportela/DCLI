var prestamo = prompt("Introduzca la cantidad del prestamo", 0);
var duracion = prompt("Introduzca los años para amortizar el prestamo", 0);
const interes = 0.05;
var ano = 0;

var cuota;
var amortizado;
var intereses;

var tabla = '<table border="1"><tr><td>Año</td><td>Cuota</td><td>Intereses</td><td>Amort.</td><td>Cap.Pend.</td></tr><tr><td>' + ano + '</td><td></td><td></td><td></td><td id="presta">' + prestamo + '</td></tr>';

for (let i = duracion; i >= 1; i--) {
    cuota = (prestamo * interes) / (1 - Math.pow((1 + interes), -(i)));
    amortizado = cuota - (interes * prestamo);
    intereses = cuota - amortizado;
    prestamo = prestamo - cuota + intereses;
    ano+=1;
    
    tabla += '<tr><td>' + ano + '</td>';
    tabla += '<td>' + cuota.toFixed(2) + '</td>';
    tabla += '<td>' + intereses.toFixed(2) + '</td>';
    tabla += '<td>' + amortizado.toFixed(2) + '</td>';
    tabla += '<td>' + prestamo.toFixed(2) + '</td>';
    tabla += '</tr>';
}

tabla += '</table>';

document.body.innerHTML = tabla;