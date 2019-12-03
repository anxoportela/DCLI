function encender(){
    var contador = 0;
    document.getElementById("on").style.display="none"
    document.getElementById("off").style.display=""
    document.getElementById("peaton").src = "img/semaforo_peaton_rojo.jpg";
    document.getElementById("coche").src = "img/semaforo_verde.jpg"
    setTimeout(correrSemaforoAmbar,contador);
    setTimeout(correrSemaforoRojo,5000);
    setTimeout(correrSemaforoVerde,15000);
    setTimeout(encender,25000);
}

function correrSemaforoVerde(){
    document.getElementById("peaton").src = "img/semaforo_peaton_rojo.jpg";
    document.getElementById("coche").src = "img/semaforo_verde.jpg"
}

function correrSemaforoAmbar(){
    document.getElementById("peaton").src = "img/semaforo_peaton_rojo.jpg";
    document.getElementById("coche").src = "img/semaforo_ambar.jpg"
}

function correrSemaforoRojo(){
    document.getElementById("peaton").src = "img/semaforo_peaton_verde.jpg";
    document.getElementById("coche").src = "img/semaforo_rojo.jpg"
}

function apagar(){
    document.getElementById("on").style.display=""
    document.getElementById("off").style.display="none"
    document.getElementById("peaton").src = "img/semaforo_peaton_apagado.jpg";
    document.getElementById("coche").src = "img/semaforo_apagado.jpg"
}