var salbruto = parseFloat(prompt('Introduzca el salario bruto'));
var contrato = prompt('Introduzca su tipo de contrato', 'I/D')
var baseimp, salario;
contrato = contrato.toUpperCase();

const ssocial = 0.047;
const fprof = 0.001;
const ci = 0.015;
const cd = 0.020;
const t1 = 0.019;
const t2 = 0.024;
const t3 = 0.030;
const t4 = 0.037;
const t5 = 0.045;

if (isNaN(salbruto)) {
    alert('El salario debe ser un valor numérico');
} else if (contrato == "I" || contrato == "D") {
    if (contrato == "I") {
        salario = salbruto -= (salbruto * ssocial);
        salario -= (salario * fprof);
        salario -= (salario * ci)
    } else {
        salario = salbruto -= (salbruto * ssocial);
        salario -= (salario * fprof);
        salario -= (salario * cd)
    }
} else {
    alert('Introduzca el valor correcto (I/D)');
}

baseimp = salario * 14;

if (baseimp > 0 && baseimp < 12450) {
    salario -= (salario * t1);
} else if (baseimp >= 12450 && baseimp < 20200) {
    salario -= ((12450 * t1) + (salario - 12450) * t2);
} else if (baseimp >= 20200 && baseimp < 35200) {
    salario -= ((12450 * t1) + (20200 - 12450) * t2 + (salario - 20200) * t3);
} else if (baseimp >= 35200 && baseimp < 60000) {
    salario -= ((12450 * t1) + (20200 - 12450) * t2 + (35200 - 20200) * t3 + (salario - 35200) * t4);
} else {
    salario -= ((12450 * t1) + (20200 - 12450) * t2 + (35200 - 20200) * t3 + (60000 - 35200) * t4 + (salario - 60000) * t5);
}

alert('El salario neto es: ' + salario);