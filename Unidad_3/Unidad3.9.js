var fecha1 = prompt("Introduzca la primera fecha", "1-1-2019");
    fecha1a = fecha1.split("-")[0],
    fecha1b = fecha1.split("-")[1],
    fecha1c = fecha1.split("-")[2];
var fecha1entera = new Date(fecha1c,fecha1b,fecha1a);
var fecha2 = prompt("Introduzca la primera fecha", "31-12-2019");
    fecha2a = fecha2.split("-")[0],
    fecha2b = fecha2.split("-")[1],
    fecha2c = fecha2.split("-")[2];
var fecha2entera = new Date(fecha2c,fecha2b,fecha2a);
var unDia = 24 * 60 * 60 * 1000;
var diferenciaDias = Math.abs(Math.round((fecha2entera - fecha1entera)/unDia));

if (fecha1a<10){
    fecha1a = "0" + fecha1a.toString();
}
if (fecha2a<10){
    fecha2a = "0" + fecha2a.toString();
}
if (fecha1b<10){
    fecha1b = "0" + fecha1b.toString();
}
if (fecha2b<10){
    fecha2b = "0" + fecha2b.toString();
}

console.log("Fecha 1: " + fecha1a + "-" + fecha1b + "-" + fecha1c);
console.log("Fecha 2: " + fecha2a + "-" + fecha2b + "-" + fecha2c);
console.log("Entre la primera fecha y la segunda han transcurrido " + diferenciaDias + " días");