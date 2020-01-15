var numPantalla = '0';
var operacion = '0';
var numEspera = '0';
var decimal = '0';

function numero(x) {
    let aux = x;
    if (numPantalla == '0') {
        document.getElementById('textoPantalla').innerHTML = x;
        numPantalla = x;
        if (x == '.') {
            document.getElementById('textoPantalla').innerHTML = '0.'
            numPantalla = x;
            decimal = '1';
        }
    } else {
        if (x == '.' && decimal == '0') {
            document.getElementById('textoPantalla').innerHTML += aux;
            numPantalla += x;
            decimal = '1';
        } else if (x == '.' && decimal == '1') {} else {
            document.getElementById('textoPantalla').innerHTML += aux;
            numPantalla += x;
        }
    }
}

function operar(x) {
    igualar();
    numEspera = numPantalla;
    operacion = x;
    numPantalla = '0';
}

function raizCuadrada() {
    numPantalla = Math.sqrt(numPantalla)
    document.getElementById('textoPantalla').innerHTML = numPantalla;
    operacion = '0';
}

function fraccion() {
    let frac = Number(numPantalla);
    frac = (1 / frac);
    numPantalla = String(frac);
    document.getElementById('textoPantalla').innerHTML = numPantalla;
}

function cambiarSigno() {
    let negativo = Number(numPantalla);
    negativo = -negativo;
    numPantalla = String(negativo);
    document.getElementById('textoPantalla').innerHTML = numPantalla;
}

function igualar() {
    if (operacion == '0') {
        document.getElementById('textoPantalla').innerHTML = numPantalla;
    } else {
        let operacionCadena = numEspera + operacion + numPantalla;
        let solucion = eval(operacionCadena);
        document.getElementById('textoPantalla').innerHTML = solucion;
        numPantalla = solucion;
        operacion = '0';
    }
}

function borrarUltimoDigito() {
    let numeros = numPantalla.length;
    let ultDigito = numPantalla.substr(numeros - 1, numeros);
    numPantalla = numPantalla.substr(0, numeros - 1)
    if (numPantalla == '') {
        numPantalla = '0';
    }
    if (ultDigito == '.') {
        decimal = '0';
    }
    document.getElementById('textoPantalla').innerHTML = numPantalla;
}

function borradoParcial() {
    document.getElementById('textoPantalla').innerHTML = '0';
    numPantalla = '0';
    decimal = '0';
}

function borrarTodo() {
    document.getElementById('textoPantalla').innerHTML = '0';
    numPantalla = '0';
    decimal = '0';
    numEspera = '0';
    operacion = '0';
}