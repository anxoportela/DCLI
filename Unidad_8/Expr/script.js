var cp = /^[0-9]{5}$/;
var cpPrueba = "32516"
var cpPrueba2 = "325167"
var matricula = /^[0-9]{4}\s+[A-Z]{3}$/;
var matriPrueba1 = "1234 ABC"
var matriPrueba2 = "12345 ABC"
var matriPrueba3 = "1234 ABCD"
var tlf = /^9[0-9]{8}$/;
var tlfPrueba1 = "912365478";
var tlfPrueba2 = "9123478";
var tlfPrueba3 = "91236547888";
var tlfmvl = /^[0-9]{9}$/;
var movilPrueba1 = "652154785"
var movilPrueba2 = "65214785"
var movilPrueba3 = "6521f54785"
var fecha = /^(0[1-9]|[1-2]\d|3[01])(\/|-)(0[1-9]|1[012])(\/|-)(\d{4})$/;
var fechaPrueba1 = "22-02-1981";
var fechaPrueba2 = "22/02/81";
var fechaPrueba3 = "22-02-81";
var fechaPrueba4 = "22/02/1981";
var fechaPrueba5 = "22/2/81";
var fechaPrueba6 = "22-2-81";
var dni = /[0-9]{8}[A-Z]{1}$/g;
var dniPrueba1 = "47785452C"
var dniPrueba2 = "4778552C"
var dniPrueba3 = "4778R452C"
var dniPrueba4 = "47783452CC"
var nombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00AA\u00BA]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00AA\u00BA]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00AA\u00BA]+$/;
var nombrePrueba1 = "María José"
var nombrePrueba2 = "Mª Rosa"
var apellido = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
var numTlf = /^\+[1,7]-d{3}-d{9}|^\+d{2,3}-d{9}$/;
var email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

//alert(cpPrueba.match(cp));
//alert(cpPrueba2.match(cp));

//alert(matriPrueba1.match(matricula));
//alert(matriPrueba2.match(matricula));
//alert(matriPrueba3.match(matricula));

//alert(tlfPrueba1.match(tlf));
//alert(tlfPrueba2.match(tlf));
//alert(tlfPrueba3.match(tlf));

//alert(movilPrueba1.match(tlfmvl));
//alert(movilPrueba2.match(tlfmvl));
//alert(movilPrueba3.match(tlfmvl));

//alert(fechaPrueba1.match(fecha));
//alert(fechaPrueba2.match(fecha));
//alert(fechaPrueba3.match(fecha));
//alert(fechaPrueba4.match(fecha));
//alert(fechaPrueba5.match(fecha));
//alert(fechaPrueba6.match(fecha));

//alert(dniPrueba1.match(dni));
//alert(dniPrueba2.match(dni));
//alert(dniPrueba3.match(dni));
//alert(dniPrueba4.match(dni));

//alert(nombrePrueba1.match(nombre));
//alert(nombrePrueba2.match(nombre));