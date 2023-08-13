//Las funciones flechas arrow fuction: son mas cortas, es importante saber que en la declaracion de la funcion no se puede usar; pero en expresion de la funcion si se pueden usar. Tambien funcionan bastantes bien en los arrayMetodos

//Cuando solo regresan algo en una linea spuede colocar algo la flecha
const sumar = (n1, n2) => n1 + n2
console.log(sumar(7, 8))

//Cuando solo tienen un parametro su pueden obviar los parentesis
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('JavaScript')

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

//Some: sirve para arreglos de objetos, y validar si existe un elemento.
resultado = carrito.some((producto) => producto.nombre === 'Celular')
console.log(separar)
console.log(resultado)

//Reduce es un metodo que utiliza con callback y un valor inicial como argumento; pero el callback toma como argumento total o valor inicial y el objeto de la lista de objetos
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(separar)
console.log(resultado)

//Filter
resultado = carrito.filter((producto) => producto.precio > 400)
console.log(separar)
console.log(resultado)

resultado = carrito.filter((producto) => producto.precio < 400)
console.log(separar)
console.log(resultado)

resultado = carrito.filter((producto) => producto.nombre == 'Celular')
console.log(separar)
console.log(resultado)

resultado = carrito.filter((producto) => producto.nombre !== 'Celular')
console.log(separar)
console.log(resultado)
