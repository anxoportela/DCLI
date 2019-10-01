var peso = prompt('Introduzca su peso en KG',0);
var estatura = prompt('Introduzca su estatura en cm',0);

var imc=peso/estatura^2;

if (imc>0 && imc<=15) {
	alert('Delgadez muy severa');
} else if (imc>15 && imc<16) {
	alert('Delgadez severa');
} else if (imc>=16 && imc<18.5) {
	alert('Delgadez');
} else if (imc>=18.5 && imc<25) {
	alert('Peso saludable');
} else if (imc>=25 && imc<30) {
	alert('Sobrepeso');
} else if (imc>=30 && imc<35) {
	alert('Obesidad moderada');
} else if (imc>=35 && imc<40) {
	alert('Obesidad severa');
} else {
	alert('Obesidad mórbida');
}
