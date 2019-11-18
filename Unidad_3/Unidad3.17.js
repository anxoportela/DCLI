var textoSinCodificar = prompt("Introduzca el texto a codificar");
var abcd = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var codificado = "";

for (let i = 0; i < textoSinCodificar.length; i++) {
    let posCodificado = abcd.indexOf(textoSinCodificar[i]);
    if (isNaN(textoSinCodificar[i])) {
        while (posCodificado < abcd.length - 1) {
            codificado += abcd[posCodificado + 1]
            break;
        }
        codificado += "a";
    } else {
        if (textoSinCodificar[i] == 9) {
            codificado += "0"
        } else {
            codificado += textoSinCodificar[i] + 1;
        }
    }
}

alert(codificado.toUpperCase());