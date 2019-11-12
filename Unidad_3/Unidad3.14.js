var fraseCompleta = prompt("Introduzca una frase");
var fraseArray = fraseCompleta.split(" ");
var longitudPalabra = 0;
var palabraMayor = "";

for (let i=0; i<fraseArray.length; i++){
    if (fraseArray[i].length>longitudPalabra){
        longitudPalabra = fraseArray[i].length;
        palabraMayor = fraseArray[i];
    }
}

console.log(palabraMayor);
console.log(longitudPalabra);