class socio {
    constructor(numSocio, dni, nombre, apellidos, edad, localidad, cuotaAnual = 0) {
        this._numSocio = numSocio;
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._localidad = localidad;
        this.setCuotaAnual();
    }

    setNumSocio(NumSocio) {
        this._numSocio = NumSocio;
    }

    setDni(Dni) {
        this._dni = Dni;
    }

    setNombre(Nombre) {
        this._nombre = Nombre;
    }

    setApellidos(Apellidos) {
        this._apellidos = Apellidos;
    }

    setEdad(Edad) {
        this._edad = Edad;
    }

    setLocalidad(Localidad) {
        this._localidad = Localidad;
    }

    setCuotaAnual() {
        if (this._edad < 18) {
            this._cuotaAnual = 5;
        } else if (this._edad >= 18 && this._edad <= 65) {
            this._cuotaAnual = 10
        } else {
            this._cuotaAnual = 0;
        }
    }

    modificaNombre(x) {
        this._nombre = x;
    }

    modificaApellidos(x) {
        this._apellidos = x;
    }

    modificaEdad(x) {
        this._edad = x;
        this.setCuotaAnual();
    }

    openWin() {
        var myWindow = window.open('', '', 'width=200,height=50');
        myWindow.document.write("<p>Nombre: " + this._nombre + "<br>Apellidos: " + this._apellidos + "<br>DNI: " + this._apellidos + "<br>Num. Socio: " + this._numSocio +"<br>Cuota: " + this._cuotaAnual + "</p>");
        myWindow.document.close();
        myWindow.focus();
    }
}

function crearSocio(){
    
}

var socio1 = new socio(135, "44466778C", "Luis", "Pérez", 23, "Ourense");
console.log(socio1);
socio1.openWin();