function encriptarTexto() {
    let textoAencriptar = document.getElementById("areaTxt").value;
    let textoEncriptado = "";
    let textoEncriptadoPares = "";
    let textoEncriptadoImPares = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ1234567890- ";
    let numInicio = 10;
    for (let i = 0; i < textoAencriptar.length; i++) {
        for (let j = 0; j < letras.length; j++) {
            if (textoAencriptar[i].toUpperCase() == letras[j]) {
                textoEncriptado += numInicio + letras.search(letras[j]);
            }
        }
    }

    for (let i = 0; i < textoEncriptado.length; i += 2) {
        textoEncriptadoPares += textoEncriptado[i];
    }

    for (let i = 1; i < textoEncriptado.length; i += 2) {
        textoEncriptadoImPares += textoEncriptado[i];
    }

    document.getElementById("salida").innerHTML = textoEncriptadoPares + textoEncriptadoImPares;

}

function desencriptarTexto() {
    let textoADesencriptar = document.getElementById("areaTxt").value;
    let textoADesencriptarTotal = "";
    let textoADesencriptarPares = "";
    let textoADesencriptarImPares = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ1234567890- ";
    let textoFinal = "";
    let num;

    for (let i = 0; i < textoADesencriptar.length / 2; i++) {
        textoADesencriptarPares += textoADesencriptar[i];
    }

    for (let i = textoADesencriptar.length / 2; i < textoADesencriptar.length; i++) {
        textoADesencriptarImPares += textoADesencriptar[i];
    }

    for (let i = 0; i < textoADesencriptar.length / 2; i++) {
        textoADesencriptarTotal += textoADesencriptarPares[i] + textoADesencriptarImPares[i];
    }

    for (let i = 0; i < textoADesencriptarTotal.length; i += 2) {
        num = parseInt(textoADesencriptarTotal.substring(i, i + 1));
        textoFinal += letras[num - 10];
    }

    document.getElementById("salida").innerHTML = textoFinal;

}