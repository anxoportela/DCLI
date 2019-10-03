var prom = 0;
var suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
    if (i % 2 == 0) {
        console.log(i + ' es par')
    }
    if (i % 3 == 0) {
        console.log(i + ' es multiplo de tres')
    }
}

prom = suma / 100;
alert(prom);