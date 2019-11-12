var dniCompleto = prompt("Introduzca su DNI");
var dniNum = parseInt(dniCompleto.substr(0,8));
var dniLetra = dniCompleto.substr(-1).toUpperCase();
const letraDni = "TRWAGMYFPDXBNJZSQVHLCKE";

if ((letraDni.charAt(dniNum%23)) == dniLetra) {
    alert("El DNI es correcto");
} else {
    alert("El DNI es incorrecto");
}