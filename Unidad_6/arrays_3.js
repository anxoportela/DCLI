var Obj1 = {"nombre":"juan","edad":34};
var Obj2 = {"nombre":"eva","edad":24};
var Obj3 = {"nombre":"ana","edad":17};
var Obj4 = {"nombre":"pepe","edad":31};
var Obj5 = {"nombre":"margarita","edad":16};

// Ejercicio 3.1
function sumarEdades(...x){
    let suma=0;
    x.map(function (a) {
        suma+=a.edad;
    });
    return suma;
}
console.log(sumarEdades(Obj1,Obj2,Obj3,Obj4,Obj5));

// Ejercicio 3.2
var alumnos = [];
alumnos.push(Obj1,Obj2,Obj3,Obj4,Obj5);
console.log(alumnos);

// Ejercicio 3.3
function AlumnosMayoresEdad(...x){
    let vector=[];
    x.map(function (a) {
        if(a.edad>=18){
            vector.push(a);
        }
    });
    return vector;
}
console.log(AlumnosMayoresEdad(Obj1,Obj2,Obj3,Obj4,Obj5));

// Ejercicio 3.4
var vectorNombres = alumnos.map((nombreSalida) => nombreSalida.nombre);
console.log(vectorNombres);