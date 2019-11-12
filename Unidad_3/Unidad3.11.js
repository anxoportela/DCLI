var nombreCompleto = prompt("Introduzca su nombre completo");
var nombreArray = nombreCompleto.split(" ");
var nombreSinEspacios = nombreCompleto.replace(" ","").length;


console.log(nombreSinEspacios);
console.log(nombreCompleto.toUpperCase());
console.log(nombreCompleto.toLowerCase());
console.log("Nombre: " + nombreArray[0] + "\nApellido1: " + nombreArray[1] + "\nApellido2: " + nombreArray[2]);
console.log((nombreArray[0].substr(0,3)+nombreArray[1].substr(-3)+nombreArray[2].substr(-3)).toLowerCase());
