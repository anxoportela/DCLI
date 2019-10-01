var nombre = prompt('Introduzca el nombre del artículo:', 'Naranjas');
var precio = prompt('Introduzca el precio del artículo:', 0);
var iva = prompt('Introduzca el iva del artículo:', 0);

if (isNaN(precio) || isNaN(iva)) {
  alert('Introduzca valores numéricos');
} else if (iva=="") {
  let precioiva=precio*1.21;
  alert('El precio del producto ' + nombre + ' es: ' + precioiva + ' euros');
} else {
  let precioiva=precio*(1+iva/100);
  alert('El precio del producto ' + nombre + ' es: ' + precioiva + ' euros');
}
