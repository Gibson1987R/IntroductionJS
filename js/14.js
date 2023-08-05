//Arreglos o Array: sirven para agrupar elementos del mismo tipo o relacionados

let separar = '.-.-.-.-.-.-.-.-.'

const numeros = [10, 20, 30, 40, 50]
console.log(numeros)
console.table(numeros) //Forma de ver los valores ordenados en una tabla

//Se pueden crear con el constructor new pero es menos usada esta forma

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo')
console.log(meses)
console.table(meses)

//La idea es tener datos relacionados pero no pasa nada si tenemos diferentes tipos de datos

/* const arreglote = [
  'Joaquin',
  1.2,
  true,
  'si',
  null,
  { nombre: 'Gibson', trabajo: 'Programador' },
  [1, 'Anais', 2, 3],
]

console.log(arreglote) */

//Acceder a los valores de un arreglo: arreglo[position]
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//Conocer la extension de un arreglo: array.length
console.log(numeros.length)

//Los iteradores permiten recorrer los array son propios de los array como forEach
meses.forEach((mes) => console.log(mes))
console.log(separar)

//Agregar elementos al arreglo

//Poco comun, array[position]= valor pero si la position existe modifica su valor al nuevo; sino crea una nueva position
numeros[5] = 60
console.table(numeros)
console.log(separar)

//array.push(valor, valor2, valor3): agrega al final de la lista los valores que le vamos pasando, su desventaja es que se recomienda no modificar los valores del arreglo original

numeros.push(100, 250, 96)
console.table(numeros)
console.log(separar)

//array.unshift(valor, valor2, valor3): agrega al inicio de la lista los valores que le vamos pasando, su desventaja es que se recomienda no modificar los valores del arreglo original

numeros.unshift(-108, -25, -6)
console.table(numeros)
console.log(separar)

//eliminar elementos del array con array.pop() que elemina el ultimo
//array.shift() elimina el primero

//Eliminar un valor del medio con array.splice(position del elemento a eliminar, cuantos a eliminar)

/* meses.splice(3, 1)
console.table(meses)
console.log(separar) */

//Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'] // es equivalente a push() pero no modificas el arreglo original
console.table(nuevoArreglo)
console.log(separar)

const nuevoArreglo2 = ['Diciembre', ...meses] // es equivalente a unshift() pero no modificas el arreglo original
console.table(nuevoArreglo2)
console.log(separar)
