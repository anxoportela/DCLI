function borrarTexto() {
    document.getElementById("textarea").value = "";
}

function compruebaPalindromo() {
    var palindromo = document.getElementById("textarea").value.toLowerCase();
    var palindromoReves = "";
    var palindromoResultado = true;
    var contador = 0;

    for (let i = palindromo.length; i > 0; i--) {
        palindromoReves += palindromo[i - 1];
    }

    while (palindromo[contador] != palindromoReves[contador]) {
        palindromoResultado = false;
        contador++;
    }

    if (palindromoResultado) {
        alert("Es palíndromo");
    } else {
        alert("No es palíndromo");
    }
}