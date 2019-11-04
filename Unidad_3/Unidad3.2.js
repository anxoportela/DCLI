function cambioBase(a, b, c) {
    if (a.isNaN()) {
        return console.log("No es un número entero")
    } else {
        while (b >= 2 || b <= 36 || c >= 2 || c <= 36) {
            return new Number(a).parseInt(c);
        }
    }
}

var numero = new Number(prompt("Introduzca un número entero"));
var baseOrigen = new Number(prompt("Introduzca la base original"));
var baseDestino = new Number(prompt("Introduzca la base destino"));

console.log(cambioBase(numero,baseOrigen,baseDestino));