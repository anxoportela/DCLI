var a = parseFloat(prompt("Introduzca el valor a"));
var b = parseFloat(prompt("Introduzca el valor b"));
var c = parseFloat(prompt("Introduzca el valor c"));

if (a==0 || b==0 || c==0) {
    alert("Los coeficientes tienen valor 0");
} else {
    let x = b**2 - 4*a*c;
    if (x == 0) {
        alert("La ecuación tiene una sola solución");
    } else if (x > 0) {
        alert("La ecuación tiene dos soluciones");
        let y = (-b + Math.sqrt(b**2-4*a*c))/(2*a);
        alert("La solución positiva es " + y);
        let z = (-b - Math.sqrt(b**2-4*a*c))/(2*a);
        alert("La solución negativa es " + z);
    } else {
        alert("La ecuación tiene dos soluciones imaginarias");
        let y = (-b)/(2*a);
        alert("La primera solución imaginaria es " + y +"i");
        let z = Math.sqrt(b**2-4*a*c)/(2*a);
        alert("La segunda solución imaginaria es " + z +"i");
    }
}