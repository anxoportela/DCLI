class numeroRacional {
    constructor(Numerador, Denominador) {
        this._numerador = Numerador;
        this._denominador = Denominador;
    }

    get Numerador() {
        return this._numerador;
    }

    set Numerador(Numerador) {
        this._numerador = Numerador;
    }

    get Denominador() {
        return this._denominador;
    }

    set Denominador(Denominador) {
        this._denominador = Denominador;
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

var nuevoRacional = new numeroRacional(2, 4);
console.log(nuevoRacional.Numerador+"/"+nuevoRacional.Denominador);
simplificar(nuevoRacional.Numerador, nuevoRacional.Denominador);