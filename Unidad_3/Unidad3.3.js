function primi(x) {
    let num = Math.round(Math.random() * x);
    return num;
}

var combinacion = [];
combinacion.push(primi(10));

for (let j = 0; j < 6; j++) {
   
   
   
    var i = 0;
    var aux = primi(10);
    console.log("aux: "+aux)
    while (i < combinacion.length && combinacion[i] != aux) {
        console.log("array: "+i+ " "+ combinacion[i]);
        i++;
    }
    if (i<combinacion.length && combinacion[i] != aux){
        aux = primi(10);
    
    }
    combinacion.push(aux);
}
console.log(combinacion);