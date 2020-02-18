var cadena = "Tres tristes tigres tragaban trigo en tres tristes trastos, en tres tristes trastos tres tristes tigres tragaban trigo en un trigal";

var dosLetras = /\b\w{2}\b/g;
var cuatroLetrasVocal = /\b\w{2}[aeiouáéíóú]{1}\w{1}\b/g;
var empiezaTR = /\b(tr|Tr)[\w]*\b/g;
var replace = /\btigres\b/g;
var sinEspacios= /\b\s+\b/g;

//alert(cadena.replace(replace, "leones"));
alert(cadena.replace("sinEspacios", ""));