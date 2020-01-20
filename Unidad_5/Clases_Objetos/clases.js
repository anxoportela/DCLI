class alumno {
    constructor(Nombre, Apellidos, Dni, Modulos = [], Provincia) {
        this._nombre = Nombre;
        this._apellidos = Apellidos;
        this._dni = Dni;
        this._modulos = Modulos;
        this._provincia = Provincia;
    }

    getNombre() {
        return this._nombre;
    }

    setNombre(Nombre) {
        this._nombre = Nombre;
    }

    getApellidos() {
        return this._apellidos;
    }

    setApellidos(Apellidos) {
        this._apellidos = Apellidos;
    }

    getDni() {
        return this._dni;
    }

    setDni(Dni) {
        this._dni = Dni;
    }

    getModulos() {
        return this._modulos;
    }

    setModulos(Modulos) {
        this._modulos = Modulos;
    }

    getProvincia() {
        return this._provincia;
    }

    setProvincia(Provincia) {
        this._provincia = Provincia;
    }

}

var alumnoNuevo = new alumno("Luis","Perez","44444444Z", ["daw","dam","asir"],"Ourense");
console.log(alumnoNuevo._nombre);
console.log(alumnoNuevo._apellidos);
console.log(alumnoNuevo._dni);
console.log(alumnoNuevo._modulos);
console.log(alumnoNuevo._provincia);

