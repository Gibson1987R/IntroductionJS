let separar = '-----------'
//Variables a partir de propiedades de un Objeto:
const producto = {
  nombreProduct: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true,
}

console.log(producto)
console.log(separar)

//Forma anterior

const nombreProduct = producto.nombreProduct
console.log(nombreProduct)
console.log(separar)

//Destructuring: parece una asignacion de variables pero lleva unas llaves con el nombre de la variables seguido del igual y nombre del producto. Las variables deben llevar el mismo nombre de la propiedad interna.

const { disponible, precio } = producto
console.log(disponible)
console.log(precio)
console.log(separar)
