var textoSinCodificar = prompt("Introduzca el texto a codificar").toLowerCase();
var abcd = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var codificado = "";
var codificadoReves = "";

for (let i = 0; i < textoSinCodificar.length; i++) {
    let posCodificado = abcd.indexOf(textoSinCodificar[i]);
    if (isNaN(textoSinCodificar[i])) {
        if (posCodificado < 25) {
            codificado += abcd[posCodificado + 1];
        } else {
            codificado += "a";
        }
    } else {
        if (posCodificado > 25 && posCodificado < abcd.length - 1) {
            codificado += abcd[posCodificado + 1];
        } else if (textoSinCodificar[i] == "9") {
            codificado += "0";
        } else {
            codificado += textoSinCodificar[i];
        }
    }
}

for (let i = codificado.length; i>0 ; i--){
    codificadoReves += codificado.charAt(i-1);
}

alert(codificadoReves.toUpperCase());