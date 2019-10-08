var X = parseInt(prompt('Introduzca un valor entero', 0));

for (let i = 1; i <= X; i++) {
    let nombre = prompt('Introduzca un nombre de alumno');
    let nota = parseInt(prompt('Introduzca la nota del alumno'));
    let notaLetra = "";
    switch (nota) {
        case 0:
            notaLetra = "cero";
            break;
        case 1:
            notaLetra = "uno";
            break;
        case 2:
            notaLetra = "dos";
            break;
        case 3:
            notaLetra = "tres";
            break;
        case 4:
            notaLetra = "cuatro";
            break;
        case 5:
            notaLetra = "cinco";
            break;
        case 6:
            notaLetra = "seis";
            break;
        case 7:
            notaLetra = "siete";
            break;
        case 8:
            notaLetra = "ocho";
            break;
        case 9:
            notaLetra = "nueve";
            break;
        case 10:
            notaLetra = "diez";
    }
    console.log('El nombre del alumno es ' + nombre + ' y su nota es: ' + notaLetra);
}