var divisor = parseInt(prompt('Introduzca un valor entero para el divisor'));
var cadena1 = [];
var cadena2 = [];
var cadena3 = [];
var cadena4 = [];
var cadena5 = [];
var cadena6 = [];

for (let i = 1; i <= divisor; i++) {
    for (let j = 1; j <= i; j++) {
        cadena1.push(j)
        cadena2.push(i)
    }
}

for (let x in cadena1) {
    if ((cadena1[x] / cadena2[x] != 0) && (cadena1[x] / cadena2[x] != 1)) {
        cadena3.push(cadena1[x]);
        cadena4.push(cadena2[x]);
    }
}

for (let y in cadena3) {
    if (cadena3[y] == 1) {
        cadena5.push(cadena3[y]);
        cadena6.push(cadena4[y]);
    } else {
        for (let j = 2; j < cadena3[y]; j++) {
            if (cadena3[y] % j == 0) {
                if (cadena4[y] % j != 0) {
                    cadena5.push(cadena3[y]);
                    cadena6.push(cadena4[y]);
                }
            } else {
                cadena5.push(cadena3[y]);
                cadena6.push(cadena4[y]); 
            }
        }
    }
}

cadena5.unshift(0, 1);
cadena6.unshift(1, 1);
console.log(cadena5);
console.log(cadena6);