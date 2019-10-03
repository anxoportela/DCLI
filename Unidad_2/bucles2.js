var num = parseInt(prompt('Introduzca un numero entero mayor de cero', 1));
var suma = 0;

for (let i = 1; i < num; i++) {
    suma += i;
}

alert(suma);