var imgTime = ["img/0.png", "img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png"];


function genHoraImg(){
    var fecha = new Date();
    var horas = fecha.getHours();
    var mins = fecha.getMinutes();
    var segs = fecha.getSeconds();
    if (horas<10){
        horas = "0" + horas;
    }
    if (mins<10){
        mins = "0" + mins;
    }
    if (segs<10){
        segs = "0" + segs;
    }
    var horaCompleta = horas + ":" + mins + ":" + segs;
    document.getElementById("hora1").src = imgTime[parseInt(horaCompleta[0])]
    document.getElementById("hora2").src = imgTime[parseInt(horaCompleta[1])]
    document.getElementById("min1").src = imgTime[parseInt(horaCompleta[3])]
    document.getElementById("min2").src = imgTime[parseInt(horaCompleta[4])]
    document.getElementById("seg1").src = imgTime[parseInt(horaCompleta[6])]
    document.getElementById("seg2").src = imgTime[parseInt(horaCompleta[7])]
}

setInterval(genHoraImg,1000);
