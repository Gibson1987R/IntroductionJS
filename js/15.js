//Array Metodos, se les llama asi porque tienen el nombre de la variable punto nombre de una funcion

let separar = '.-.-.-.-.-.-.-.-.'
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
const carrito = [
  { nombre: 'Monitor 20 pulgadas', precio: 500 },
  { nombre: 'Television 50 pulgadas', precio: 700 },
  { nombre: 'Tablet 10 pulgadas', precio: 120 },
  { nombre: 'Audifonos', precio: 50 },
  { nombre: 'Teclado', precio: 80 },
  { nombre: 'Celular', precio: 500 },
  { nombre: 'Bocinas', precio: 250 },
  { nombre: 'Laptop', precio: 800 },
]

//ForEach
meses.forEach((mes) => {
  if (mes == 'Marzo') {
    console.log('Marzo si existe')
  }
})

//Includes: ademas de las string sirve para array planas
let resultado = meses.includes('Marzo')
console.log(separar)
console.log(resultado)

//Some: sirve para arreglos de objetos, y validar si existe un elemento.
resultado = carrito.some((producto) => {
  return producto.nombre === 'Celular'
})
console.log(separar)
console.log(resultado)

//Reduce es un metodo que utiliza con callback y un valor inicial como argumento; pero el callback toma como argumento total o valor inicial y el objeto de la lista de objetos
resultado = carrito.reduce((total, producto) => {
  return total + producto.precio
}, 0)
console.log(separar)
console.log(resultado)

//Filter
resultado = carrito.filter((producto) => {
  return producto.precio > 400
})
console.log(separar)
console.log(resultado)

resultado = carrito.filter((producto) => {
  return producto.precio < 400
})
console.log(separar)
console.log(resultado)

resultado = carrito.filter((producto) => {
  return producto.nombre == 'Celular'
})
console.log(separar)
console.log(resultado)

resultado = carrito.filter((producto) => {
  return producto.nombre !== 'Celular'
})
console.log(separar)
console.log(resultado)
