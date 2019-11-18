function compruebaLetras() {
    var areaTexto = document.getElementById("textarea").value.toLowerCase();
    areaTexto = areaTexto.replace(" ", "");

    var abcd = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];
    var faltantes = "";

    for (let i = 0; i < abcd.length; i++) {
        let olvidado = 0;
        for (let j = 0; j < areaTexto.length; j++) {
            if (abcd[i] == areaTexto[j]) {
                olvidado = 1;
            }
        }
        if (olvidado == 0) {
            faltantes += abcd[i];
        }
    }
    alert(faltantes);
}