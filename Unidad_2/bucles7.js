var num = parseInt(prompt('Introduzca un número entero'));
var i=1;
var factorial=1;
var potencia=0;

while (i <= num) {
        factorial*=i;
        potencia=Math.pow(num,i);
        i++;
}

console.log(factorial);
console.log(potencia);
