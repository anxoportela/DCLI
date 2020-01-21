class numeroRacional {
    constructor(Numerador, Denominador) {
        this.Num = Numerador;
        this.Den = Denominador;
    }

    get Numerador() {
        return this.Num;
    }

    set Numerador(Numerador) {
        this.Num = Numerador;
    }

    get Denominador() {
        return this.Den;
    }

    set Denominador(Denominador) {
        this.Den = Denominador;
    }
}

function simplificar(x, y) {
    var aux;

    if (x > y) {
        aux = y;
    } else {
        aux = x;
    }

    for (let i = aux; i > 1; i--) {
        if (x % i == 0 && y % i == 0) {
            x /= i;
            y /= i;
        }
    }

    console.log(x + "/" + y);
}

function sumarfraccionario(f1n, f1d, f2n, f2d) {
    var den = f1d * f2d;
    var num = f1n * f2d + f2n * f1d;
    simplificar(num, den);
}

function restafraccionario(f1n, f1d, f2n, f2d) {
    var den = f1d * f2d;
    var num = f1n * f2d - f2n * f1d;
    simplificar(num, den);
}

function multiplicafraccionario(f1n, f1d, f2n, f2d) {
    var num = f1n * f2n;
    var den = f1d * f2d;
    simplificar(num, den);
}

function dividefraccionario(f1n, f1d, f2n, f2d) {
    var num = f1n * f2d;
    var den = f2n * f1d;
    simplificar(num, den);
}

function creararray() {
    var x = parseInt(prompt("Introduzca el tamaño del array"));
    var arr = new Array(x);
    for(var i=0;i<x;i++){
        arr[i] = pedirfracciones();
    }
    console.log(arr);
}

function pedirfracciones() {
    var num = prompt("Introduzca un numerador");
    var den = prompt("Introduzca un denominador");
    var frac = new numeroRacional(num,den);
    return frac;
}

//var fr1 = new numeroRacional(1, 2);
//var fr2 = new numeroRacional(1, 2);

//sumarfraccionario(fr1.Num,fr1.Den,fr2.Num,fr2.Den);
//restafraccionario(fr1.Num,fr1.Den,fr2.Num,fr2.Den);
//multiplicafraccionario(fr1.Num,fr1.Den,fr2.Num,fr2.Den);
//dividefraccionario(fr1.Num, fr1.Den, fr2.Num, fr2.Den);
creararray();