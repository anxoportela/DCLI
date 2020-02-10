class socio {
    constructor(numSocio, dni, nombre, apellidos, edad, localidad, cuotaAnual = 0) {
        this.setNumSocio();
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._localidad = localidad;
        this.setCuotaAnual();
    }

    setNumSocio() {
        if(arraySocios.length<1){
            this._numSocio = 1;
        } else {
            this._numSocio=arraySocios.length+1;
        }
    }

    get numSocio () {
        return this._numSocio;
    }

    setDni(Dni) {
        this._dni = Dni;
    }

    get dni () {
        return this._dni;
    }

    setNombre(Nombre) {
        this._nombre = Nombre;
    }

    get nombre () {
        return this._nombre;
    }

    setApellidos(Apellidos) {
        this._apellidos = Apellidos;
    }

    get apellidos () {
        return this._apellidos;
    }

    setEdad(Edad) {
        this._edad = Edad;
    }

    get edad () {
        return this._edad;
    }

    setLocalidad(Localidad) {
        this._localidad = Localidad;
    }

    get localidad () {
        return this._localidad;
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

    get cuotaAnual () {
        return this._cuotaAnual;
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
        var myWindow = window.open('', '', 'width=200,height=200');
        myWindow.document.write("<p>Nombre: " + this._nombre + "<br>Apellidos: " + this._apellidos + "<br>DNI: " + this._apellidos + "<br>Num. Socio: " + this._numSocio +"<br>Cuota: " + this._cuotaAnual + "</p><p><button onclick='myWindow.close()'>Cerrar</button></p>");
        myWindow.document.close();
        myWindow.focus();
    }
}

var arraySocios = [];
function crearSocio(){
    arraySocios.push(new socio(document.getElementById("num").value,document.getElementById("dni").value,document.getElementById("nom").value,document.getElementById("ape").value,document.getElementById("edad").value,document.getElementById("loc").value));
}

var windowUsers;
function muestraSociosTabla(){
    var tablaSocios ="<table border=1><thead><tr><th>NumSocio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Edad</th><th>Localidad</th><th>Cuota</th><th></th></tr></thead>";
    arraySocios.forEach(socio => {
        tablaSocios+="<tbody></tbody><tr><td>"+socio.numSocio+"</td><td>"+socio.dni+"</td><td>"+socio.nombre+"</td><td>"+socio.apellidos+"</td><td>"+socio.edad+"</td><td>"+socio.localidad+"</td><td>"+socio.cuotaAnual+"</td><td><button onclick=\"editaSocio()\">Editar</button></td></tr></tbody>";
    });
    tablaSocios+="</table>"
    windowUsers = window.open('','','width=550,height=400');
    windowUsers.document.body.innerHTML = tablaSocios;
}

function editaSocio(){
    var filaEditar = x.closest('tr').rowIndex-1;
    var dni = windowUsers.prompt("Introduzca el nuevo DNI");
    var nombre = windowUsers.prompt("Introduzca el nuevo Nombre");
    var apellidos = windowUsers.prompt("Introduzca los nuevos Apellidos");
    var edad = windowUsers.prompt("Introduzca la nueva edad");
    var localidad = windowUsers.prompt("Introduzca la nueva localidad");
    arraySocios[filaEditar].Dni = dni;
    arraySocios[filaEditar].Nombre = nombre;
    arraySocios[filaEditar].Apellidos = apellidos;
    arraySocios[filaEditar].Edad = edad;
    arraySocios[filaEditar].localidad = localidad;
}

//var socio1 = new socio(1, "44466778C", "Luis", "Pérez", 23, "Ourense");
//console.log(socio1);
//socio1.openWin();