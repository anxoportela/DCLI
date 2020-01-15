function crearArrayPares(){
    let vectorPar = [];
    let aux = 0;    
    for (let i=0; i<=100; i+=2){
        vectorPar[aux] = i;
        aux++;
    }
    return vectorPar;
}

function crearArrayImpares(){
    let vectorImpar = [];
    let aux = 0;
    for (let i=1; i<=100; i+=2){
        vectorImpar[aux] = i;
        aux++;
    }
    return vectorImpar;
}

function producto(){
    let pares = crearArrayPares();
    let impares = crearArrayImpares();
    for (let i=0, j=0; i<pares.length,j<impares.length;i++,j++){
        console.log(pares[i]*impares[j]);
    }
}

producto();