var hora = prompt('Introduzca la hora','3:15');
hora = hora.split(':');

var nHora = 12 - parseInt(hora[0]);
var nMin = Math.abs(parseInt(hora[1]) - 60);

alert(nHora + ':' + nMin);