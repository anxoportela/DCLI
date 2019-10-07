var X = parseInt(prompt('Introduzca un valor entero',0));

for (let i=1;i<=X;i++){
    let nombre = prompt('Introduzca un nombre de alumno');
    let nota = prompt('Introduzca la nota del alumno');
    console.log('El nombre del alumno es ' + nombre + ' y su nota es: ' + nota);
}