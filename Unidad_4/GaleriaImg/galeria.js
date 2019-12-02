var galeria = ["ourense1", "ourense2", "ourense3", "ourense4", "ourense5"];
var i = 0;
function obtenerImg() {
    if (i == galeria.length) {
        i = 0;
    }
    document.getElementById("img").src = "Img/" + galeria[i] + ".jpg";
    i++
}
setInterval(obtenerImg, 1000);