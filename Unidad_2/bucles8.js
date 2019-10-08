var num = parseInt(prompt('Introduzca un número entero'));

do {
    alert('Introduce un número positivo menor que 20');
    num = parseInt(prompt('Introduzca un número entero'));
}
while (num<0 || num>20);