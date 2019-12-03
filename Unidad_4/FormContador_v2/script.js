var x = 0;
var contador;
var contador2 = 0;

function iniciar(){
    x++;
    document.getElementById("inicio").style.display = 'none';
    contador = setTimeout(iniciar,parseInt(document.getElementById("texto").value)*1000);
    document.getElementById("texto2").value = contador2 += parseInt(document.getElementById("texto").value) ;
}

function parar(){
    clearTimeout(contador);
    document.getElementById("texto2").value = contador2;
}

function continuar(){
    document.getElementById("texto2").value = contador2;
    document.getElementById("texto2").value = contador2 += parseInt(document.getElementById("texto").value)
    contador = setTimeout(iniciar,parseInt(document.getElementById("texto").value)*1000);
}

function resetear(){
    clearTimeout(contador);
    document.getElementById("texto").value = "";
    document.getElementById("texto2").value = "";
    document.getElementById("inicio").style.display = '';
}