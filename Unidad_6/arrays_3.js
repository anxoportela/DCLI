var Obj1 = {
    "nombre": "juan",
    "edad": 34
};
var Obj2 = {
    "nombre": "eva",
    "edad": 24
};
var Obj3 = {
    "nombre": "ana",
    "edad": 17
};
var Obj4 = {
    "nombre": "pepe",
    "edad": 31
};
var Obj5 = {
    "nombre": "margarita",
    "edad": 16
};

// Ejercicio 3.1
function sumarEdades(...x) {
    let suma = 0;
    x.map(function (a) {
        suma += a.edad;
    });
    return suma;
}
console.log(sumarEdades(Obj1, Obj2, Obj3, Obj4, Obj5));

// Ejercicio 3.2
var alumnos = [];
alumnos.push(Obj1, Obj2, Obj3, Obj4, Obj5);
console.log(alumnos);

// Ejercicio 3.3
function AlumnosMayoresEdad(...x) {
    let vector = [];
    x.map(function (a) {
        if (a.edad >= 18) {
            vector.push(a);
        }
    });
    return vector;
}
console.log(AlumnosMayoresEdad(Obj1, Obj2, Obj3, Obj4, Obj5));

// Ejercicio 3.4
var vectorNombres = alumnos.map((nombreSalida) => nombreSalida.nombre);
console.log(vectorNombres);

//Ejercicio 3.5
const [first, second, third] = AlumnosMayoresEdad(Obj1, Obj2, Obj3, Obj4, Obj5);
console.log(first, second, third);

//Ejercicio 3.6
function AlumnosMenoresEdad(...x) {
    let vector = [];
    x.map(function (a) {
        if (a.edad < 18) {
            vector.push(a);
        }
    });
    return vector;
}
console.log(AlumnosMenoresEdad(Obj1, Obj2, Obj3, Obj4, Obj5).length);

//Ejercicio 3.7
var alumnosOrdena = [];
alumnosOrdena.push(Obj1, Obj2, Obj3, Obj4, Obj5);

function compare(x, y) {
    const edadX = x.edad;
    const edadY = y.edad;
    let compara = 0;
    if (edadX > edadY) {
        compara = 1;
    } else if (edadX < edadY) {
        compara = -1;
    }
    return compara;
}

console.log(alumnosOrdena.sort(compare));

//Ejercicio 3.8
var Obj6 = {
    "nombre": "jerónimo",
    "edad": 19
};
var Obj7 = {
    "nombre": "noa",
    "edad": 20
};

var alumnosAdd = [Obj6,Obj7];
var alumnosNuevos = AlumnosMayoresEdad(Obj1, Obj2, Obj3, Obj4, Obj5);
alumnosNuevos.push(...alumnosAdd);

console.log(alumnosNuevos);