var num = parseInt(prompt('Introduzca un numero entero positivo'));
var salida = [];
num = num.toString();
var tamano = num.length;
var suma = 0;

for (let i=0;i<tamano;i++){
    salida.push(+num.charAt(i));
}

for (let x in salida){
    suma += salida[x++];
}

console.log('El número ' + num + ' tiene ' + tamano + ' dígitos, y su suma es: ' + suma);
