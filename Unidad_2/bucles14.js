
var divisor = parseInt(prompt('Introduzca un valor entero para el divisor'));
var cadena1 = [];
var cadena2 = [];
var cadena3 = [];
var cadena4 = [];

for (let i=1; i<=divisor; i++){
    for (let j=1; j<=i; j++){
        cadena1.push(j)
        cadena2.push(i)
    }
}

for (let x in cadena1){
        if ((cadena1[x]/cadena2[x] != 0) && (cadena1[x]/cadena2[x] != 1)) {
            cadena3.push(cadena1[x]);
            cadena4.push(cadena2[x]);
    }
}

cadena3.unshift(0,1);
cadena4.unshift(1,1);
console.log(cadena3);
console.log(cadena4);