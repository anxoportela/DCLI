var x = 0;
var contador;

function iniciar(){
    document.getElementById("texto").value = x;
    x++;
    document.getElementById("inicio").style.display = 'none';
    contador = setTimeout(iniciar,1000);
}

function parar(){
    clearTimeout(contador);
    document.getElementById("texto").value = contador;
}

function continuar(){
    document.getElementById("texto").value = contador;
    contador+=1;
    contador = setTimeout(continuar,1000);
}

function resetear(){
    clearTimeout(contador);
    document.getElementById("texto").value = "";
    document.getElementById("inicio").style.display = '';
}