var fecha = new Date();
var diaSemanaLetra = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var diaMesLetra = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

var dia = fecha.getDate();
var mes = diaMesLetra[fecha.getMonth()];
var ano = fecha.getFullYear();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var diaSemana = diaSemanaLetra[fecha.getDay()];

if (horas<10){
    horas = "0" + horas.toString();
}

if (minutos<10){
    minutos = "0" + minutos.toString();
}

if (segundos<10){
    segundos = "0" + segundos.toString();
}

console.log("Hoy es " + dia + " de " + mes + " de " + ano +". Son las " + horas + ":" + minutos + ":" + segundos + " y además es " + diaSemana)