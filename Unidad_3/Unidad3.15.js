var cadena1 = prompt("Introduzca la primera cadena de caracteres");
var cadena2 = prompt("Introduzca la segunda cadena de caracteres");
var tamano;
var cadenaCompleta = "";

if (cadena1.length>cadena2.length){
    tamano = cadena1.length;
} else {
    tamano = cadena2.length;
}

for (let i=0; i<tamano;i++){
    cadenaCompleta+=cadena1.charAt(i);
    cadenaCompleta+=cadena2.charAt(i);
}

console.log(cadenaCompleta);