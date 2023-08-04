//Union de dos objetos: para que no mutemos los datos y podamos hacer union de los objetos en un nuevo objeto podemos utilizar el spray operatior. Inicializando un nuevo objeto const obt3 = {...obj1, ...obj2}

let separador = '.-.-.-.-.-.-.-.-.-.-.-.'

const producto = {
  nombreProduct: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true,
}

const medidas = {
  peso: '1Kg',
  medida: '1m',
}

//
const nuevoProduct = { ...producto, ...medidas }

console.log(producto)
console.log(separador)

console.log(nuevoProduct)
console.log(separador)
