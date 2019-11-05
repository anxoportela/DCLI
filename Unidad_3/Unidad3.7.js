var nombre = prompt("Introduzca su nombre");
var tiempoInicio = new Date();
var apellido = prompt("Introduzca su apellido")
var tiempoFinal = new Date();


var tiempoTranscurrido = ((tiempoFinal - tiempoInicio)/1000)/60;


console.log("El tiempo transcurrido han sido " + tiempoTranscurrido.toFixed(2) + " minutos");