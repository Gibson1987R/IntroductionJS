let separar = '-----------'
//Objetos: es la estructura mas usada en JS y puede albergar multiples variables con su valores en una sola.

const producto = {
  nombreProduct: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true,
}

console.log(producto)

/* console.log(producto)
console.log(separar)

//Sintaxis de punto para acceder a las propiedades se coloca el nombre del obj.propity
console.log(producto.precio)
console.log(separar)

//Sintaxis de corchetes para acceder a las propiedades se coloca el nombre del obj['propity]
console.log(producto['nombreProduct'])
console.log(separar) */

//Para agregar nuevas propiedades: solo colocamos el nombre del obj.nueva = valor
producto.imagen = 'imagen.jpg'
console.log(producto.imagen)
console.log(separar)

//Para eliminar una propiedad: usamos la palabra delete obj.propety
delete producto.disponible
console.log(producto)
console.log(separar)
