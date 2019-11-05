var dia = prompt("Introduzca su día de nacimiento");
var mes = prompt("Introduzca su mes de nacimiento");
var ano = prompt("Introduzca su año de nacimiento");

var fechaNacimiento = new Date(ano,mes,dia);
var fechaActual = new Date();

var anosDiferencia = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
var mesesDiferencia;

if (fechaNacimiento.getMonth()<fechaActual.getMonth()){
    mesesDiferencia = fechaActual.getMonth() - fechaNacimiento.getMonth() + 1; 
} else {
    anosDiferencia-=1;
    mesesDiferencia = Math.abs(fechaNacimiento.getMonth() - 12 + 1);
}

console.log(anosDiferencia);
console.log(mesesDiferencia);