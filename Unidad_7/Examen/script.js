var libros = [];
var recetas = [];
var ingredientes = [];

class LibroDeCocina {
    constructor(tit, isbn, edic, autor) {
        this.setCodigo();
        this._titulo = tit;
        this._isbn = isbn;
        this._edicion = edic;
        this._autor = autor;
    }

    getCodigo = () => {
        return this._codigo
    };

    getTitulo = () => {
        return this._titulo
    };

    getIsbn = () => {
        return this._isbn
    };

    getEdicion = () => {
        return this._edicion
    };

    getAutor = () => {
        return this._autor
    };

    setCodigo = () => {
        if (libros.length < 1) {
            this._codigo = 1;
        } else {
            this._codigo = libros.length + 1;
        }
    };

    setTitulo = (tit) => {
        this._titulo = tit
    };

    setIsbn = (isbn) => {
        this._isbn = isbn
    };

    setEdicion = (edic) => {
        this._edicion = edic
    };

    setAutor = (autor) => {
        this._autor = autor
    };

    toString() {
        return "Código: " + this._codigo +
            "<br>Título: " + this._titulo +
            "<br>ISBN: " + this._isbn +
            "<br>Edicion: " + this._edicion +
            "<br>Autor: " + this._autor;
    }

}

class Ingredientes {
    constructor(nom, cant, unid="") {
        this._nombre = nom;
        this._cantidad = cant;
        this._unidades = unid;
    }

    getNombre = () => {
        return this._nombre
    };

    getCantidad = () => {
        return this._cantidad
    };

    getUnidades = () => {
        return this._unidades
    };

    setNombre = () => {
        this._nombre = nom;
    };

    setCantidad = () => {
        this._cantidad = [];
    };

    setUnidades = () => {
        this._unidades = [];
    };

    toString() {
        return "Nombre: " + this._nombre +
            "<br>Cantidad: " + this._cantidad +
            "<br>Unidades: " + this._unidades;
    }

}

class Receta {
    constructor(nom, prep, ing) {
        this._nombre = nom;
        this._preparacion = prep;
        this._ingredientes = ing;
    }

    getNombre = () => {
        return this._nombre
    };

    getPreparacion = () => {
        return this._preparacion
    };

    getIngredientes = () => {
        return this._ingredientes
    };

    setNombre = (nom) => {
        this._nombre = nom
    };

    setPreparacion = (prep) => {
        this._preparacion = prep
    };

    setIngredientes = () => {
        this._ingredientes = new Ingredientes()
    };

    toString() {
        return "Nombre: " + this._nombre +
            "<br>Preparacion: " + this._preparacion +
            "<br>Ingredientes: " + this._ingredientes;
    }
}

function addLibro() {
    libros.push(new LibroDeCocina(document.getElementById("titulo").value, document.getElementById("isbn").value,document.getElementById("tipoedicion").value,document.getElementById("autor").value))
}

function addReceta() {
    var libro = document.getElementById("isbn").value;
    recetas.push(libro,new Receta(prompt("Introduzca el nombre de la receta"),prompt("Escriba su preparación"),new Ingredientes(ingredientes.push(prompt("Introduzca el nombre de los ingrediente separado por comas")),ingredientes.push(prompt("Introduzca su cantidad seaprada por comas")),ingredientes.push(prompt("Introduzca las unidades a usar separadas por comas")))));
}

function muestraRecetas(){
    var salida = "<table border=1><tr> <th>Nombre</th> <th>Ingredientes</th> <th>Preparacion</th></tr>";
    recetas.forEach(receta => {
        salida += "<th>" + receta._nombre + "</th> <th>" + receta._ingredientes + "</th> <th>" + receta._preparacion + "</th></tr>";
    });
    salida+="</table>";
    document.getElementById("listado").innerHTML = salida;
}


//var libro1 = new LibroDeCocina(1,"Libro",2222,"Impresa","YoMismo");
//var receta1 = new Receta("Churros","Freir",new Ingredientes("Harina",100,"gr"));

//console.log(libro1);
//console.log(receta1);