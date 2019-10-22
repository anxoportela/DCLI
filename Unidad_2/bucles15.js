var num1 = prompt('Introduzca el primer sumando');
var num2 = prompt('Introduzca el segundo sumando');
var resultado = (parseInt(num1) + parseInt(num2)).toString();
alert(resultado);
var numResolver = prompt('Introduzca el número enmascarado');
var aux = [];
var auxResul = [];
var acarreo = false;

for (let i = 0; i < numResolver.length; i++) {
    numResolver.charAt(i);
    aux.push(numResolver[i]);
}

for (let x in aux) {
    if (aux[x] == "-") {
        aux.splice(x, 1, 0);
    }
}

for (let j = 0; j < num2.length; j++) {
    num2.charAt(j);
    resultado.charAt(j);
    if ((num2[j] - resultado[j]) >= 0) {
        if (acarreo) {
            auxResul.push(Math.abs((parseInt(num2[j]) + 1) - parseInt(resultado[j])));
            acarreo = false;
        } else {
            auxResul.push(Math.abs(parseInt(num2[j]) - parseInt(resultado[j])));
            acarreo = false;
        }
    } else {
        if (acarreo) {
            auxResul.push(Math.abs((parseInt(num2[j]) + 1) - parseInt(resultado[j])));
            acarreo = false;
        } else {
            auxResul.push(Math.abs(parseInt(num2[j] - parseInt(resultado[j]))));
            acarreo = true;
        }
    }
}

aux = aux.map(Number, parseInt);
aux = aux.join("");

console.log(auxResul);