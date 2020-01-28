var numeros = [1, 3, 5, 7, 9, 11];

// Ejercicio 1.1
function sumaArray() {
    console.log(numeros.reduce(function (a, b) {
        return a + b;
    }));
}
sumaArray();

// Ejercicio 1.2
var suma2=0;
numeros.forEach(function (a) {
    suma2+=a;
});
console.log(suma2);

// Ejercicio 1.3
numeros.forEach(sumaArray);

// Ejercicio 1.4
var suma3 = numeros.reduce((a, b) => a + b);
console.log(suma3);