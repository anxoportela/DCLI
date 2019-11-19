function borrarTexto() {
    document.getElementById("textarea").value = "";
}

function compruebaPalindromo() {
    var palindromo = document.getElementById("textarea").value;
    var palindromoSinAcentos  = palindromo.split(/á|Á/gi).join('a');
    palindromoSinAcentos = palindromoSinAcentos.split(/é|É/gi).join('e');
    palindromoSinAcentos = palindromoSinAcentos.split(/í|Í/gi).join('i');
    palindromoSinAcentos = palindromoSinAcentos.split(/ó|Ó/gi).join('o');
    palindromoSinAcentos = palindromoSinAcentos.split(/ú|Ú/gi).join('u');
    var palindromoSinEspacios = palindromoSinAcentos.split(" ").join("").toLowerCase();
    var palindromoReves = "";
    var palindromoResultado = true;
    var contador = 0;

    for (let i = palindromoSinEspacios.length; i > 0; i--) {
        palindromoReves += palindromoSinEspacios[i - 1];
    }

    while (palindromoSinEspacios[contador] != palindromoReves[contador]) {
         palindromoResultado = false;
         contador++;
     }

     if (palindromoResultado) {
         alert("Es palíndromo");
     } else {
         alert("No es palíndromo");
     }
}