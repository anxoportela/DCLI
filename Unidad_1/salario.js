var salbruto = parseFloat(prompt('Introduzca el salario bruto'));
var contrato = prompt('Introduzca su tipo de contrato','I/D')
contrato = contrato.toUpperCase();

const ssocial = 0.047;
const fprof = 0.001;

if (isNaN(salbruto)) {
    alert('El salario debe ser un valor numérico');
} else if (contrato=="I" || contrato=="D") {
    if (contrato=="I") {
        let salario = salbruto-=(salbruto*ssocial);
        salario-=(salario*fprof);
        alert(salario);
    }
} else {
    alert('Introduzca el valor correcto (I/D)');
}