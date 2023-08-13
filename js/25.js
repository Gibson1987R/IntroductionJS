let separador = '-+-+-+-+-+-+-+-+-+-'
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

//ForEach: Es principalmente un metodo de arrays es decir que se utiliza solo en arreglos, se ejecutan una vez por cada elemento que haya en el arreglo; esto nos permite tener la libertad de no andar midiendo el arreglo para ver cuantos elementos tiene. Lo anterior permite que no tengamos que escribir una condicion para el y que pase por cada elemento. ES UTILIZADO ESPECIALMENTE PARA IMPRIMIR O PRESENTAR EN HTML, CONSOLA O CUALQUIER OTRA PARTE, LOS DIFERENTES ELEMENTOS DE UN ARREGLO

carrito.forEach((producto) => console.log(producto.nombre))
console.log(separador)

//Map: la explicacion es la misma que en el ForEach en cuanto a sus caracteristicas de comportamiento y planteamiento asi como contexto de uso. Pero la diferencia importante es que es map ES UTILIZADO CUANDO QUEREMOS GENERAR UN NUEVO ARREGLO

const arreglo1 = carrito.forEach((producto) => producto.nombre)
console.log(arreglo1) //undefine porque no estamos imprimiendo los elementos carrito sino creando un nuevo arreglo1, este metodo solo presenta no crea arreglos
console.log(separador)

const arreglo2 = carrito.map((producto) => producto.nombre)
console.log(arreglo2) //Esto nos  presentara los que vienen de carrito pero que ahora pertenecen a un nuevo arreglo2
console.log(separador)
