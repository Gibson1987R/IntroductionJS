//Funciones que retornan un valor, este valor se guarda en otra variables para hacer mas operaciones. Esta funciones se utilizan en otros lugares o variables para que nos retornen un valor determinado

function sumar(numero1, numero2) {
  return numero1 + numero2
}

const result = sumar(9, 8)

let total = 0

function agregarCarrito(precio) {
  return (total += precio)
}

function impuetos(precioSinImpueto) {
  return precioSinImpueto * 1.16
}

total = agregarCarrito(100)
total = agregarCarrito(200)
total = agregarCarrito(300)

console.log(total)

let totalImpuesto = impuetos(total)

console.log(totalImpuesto)
