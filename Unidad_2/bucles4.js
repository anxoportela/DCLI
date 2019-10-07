var num1 = parseInt(prompt('Introduzca el primer valor',0));
var num2 = parseInt(prompt('Introduzca el segundo valor',0));
var num3 = parseInt(prompt('Introduzca el tercer valor',0));

for (let i=1;i<11;i++){
    let resul = num1*i;
    console.log(num1 + "x" + i + "=" + resul);
}

for (let i=0;i<10;i++){
    let resul = num2+i;
    console.log(num2 + "+" + i + "=" + resul);
}

for (let i=1;i<11;i++){
    let resul = num3/i;
    console.log(num3 + "/" + i + "=" + resul);
}