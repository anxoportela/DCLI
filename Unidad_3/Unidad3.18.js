var frase = prompt("Introduzca la frase para comprobar vocales");
var vocales = ["a", "e", "i", "o", "u"];
var contador;
var astericos = "*";

for (let i = 0; i < vocales.length; i++) {
    contador = 0;
    for (let j = 0; j < frase.length; j++) {
        if (vocales[i] == frase[j]) {
            contador++;
        }
    }
    console.log(vocales[i] + " " + contador + " " + astericos.repeat(contador) + "\n");
}