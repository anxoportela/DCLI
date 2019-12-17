var fecha = new Date();
var diaMes = fecha.getDate();
var mes = fecha.getMonth();
var ano = fecha.getFullYear();
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
var fechaMs = fecha.getTime();


var fechaCompleta = "Hoy es " + diaMes + " de " + meses[mes] + " de " + ano;

document.getElementById("fechaActual").innerHTML = fechaCompleta;

console.log(fechaCompleta);
console.log(fechaMs);
console.log(fecha)

function sumarDias(){

    let x = document.getElementById("texto").value;
    let fechaSumaDias = parseInt(x)*86400000 + fechaMs;
    let fechaDias = new Date(fecha.setTime(fechaSumaDias));
    let dia = parseInt(fechaDias.getDate());
    let mes = parseInt(fechaDias.getMonth() + 1);
    let ano = parseInt(fechaDias.getFullYear());
    document.getElementById("fechaModificada").innerHTML = dia + "/" + mes + "/" + ano;

}

function sumarMeses(){

    let fecha = new Date();

    let x = document.getElementById("texto").value;
    let mesInicio = fecha.getMonth();
    let anoInicio = fecha.getFullYear();
    let anoFinal;
    let mesFinal;

    if ((mesInicio+parseInt(x))>11){
        mesFinal = parseInt(x)-mesInicio+10;
        anoFinal=anoInicio+1;
    } else {
        mesFinal = parseInt(x)+mesInicio;
    }



    let fechaSumaMeses = new Date(anoFinal,mesFinal,diaMes);
    let dia = fechaSumaMeses.getDate();
    let mes = fechaSumaMeses.getMonth()+1;
    let ano = fechaSumaMeses.getFullYear();



    document.getElementById("fechaModificada").innerHTML = dia + "/" + mes + "/" + ano;

}

function sumarAnos(){

    let fecha = new Date();
    let x = document.getElementById("texto").value;

    let anoFinal = fecha.getFullYear() + parseInt(x);
    fecha.setFullYear(anoFinal);

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let ano = fecha.getFullYear();

    document.getElementById("fechaModificada").innerHTML = dia + "/" + mes + "/" + ano;

}