//For Loop
let separador = '-+-+-+-+-+-+-'

for (let i = 0; i < 100; i += 5) {
  console.log(i)
}
console.log(separador)

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es multiplo de 2`)
  }
}
console.log(separador)

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

for (let i = 0; i < carrito.length; i++) {
  const element = carrito[i].nombre
  console.log(element)
}
console.log(separador)

//While Loop, solo si la condicion es verdadera se ejecuta.
let i = 0

while (i <= 10) {
  console.log(i)
  i++
}
console.log(separador)

let j = 1
while (j <= 100) {
  if (j % 3 === 0) {
    console.log(`${j} es multiplo de 3`)
  }
  j++
}
console.log(separador)

let k = 0
while (k < carrito.length) {
  console.log(carrito[k].nombre)
  k++
}
console.log(separador)

//Do While Loop: al menos una vez se ejecuta

let a = 0
do {
  console.log(a)
  a++
} while (a <= 10)
console.log(separador)
