var radio = new Number(prompt("Introduzca el radio de la base del cilindro: ")).toFixed(3);
var altura = new Number(prompt("Introduzca la altura del cilindro: ")).toFixed(3);

console.log((Math.PI*Math.pow(radio,2)).toFixed(3));
console.log((Math.PI*Math.pow(radio,2)*altura).toFixed(3));