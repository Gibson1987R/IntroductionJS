//'use strict' //Corre a JS en modo estricto
const producto = {
  nombreProduct: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true,
}

console.log(producto)

//Object.freeze(obj) esto sella al objeto de manera que no se puede agregar una propiedad ni eliminarlas o cambiar su valores
Object.freeze(producto)

//Podemos consultar si esta sellado con Object.isFrozen(obj), nos debe indicar true o false
console.log(Object.isFrozen(producto))

//Object.seal(obj) esto sella al objeto de manera que no se puede agregar una propiedad ni eliminarlas; pero puedes cambiar su valores existentes
Object.seal(producto)

producto.imagen = 'imagen.jpg' //en modo strict se corta el programa
delete producto.precio

console.log(producto)
