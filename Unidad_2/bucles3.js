var num = parseInt(prompt('Introduzca la base de la potencia',0));
var maxpot = parseInt(prompt('Introduzca el factor máximo de la potencia'));

for (let pot=0;pot<=maxpot;pot++) {
    let resul = Math.pow(num,pot);
    console.log(resul);
}