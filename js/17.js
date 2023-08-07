//Diferencias entre metodo y funcion: La forma en que son utilizadas y el contexto donde lo son.

const numero1 = 20
const numero2 = '20'

console.log(parseInt(numero2)) // Funcion: primero nombre luego parantesis con argumento
console.log(numero1.toString()) // Metodo: objeto o variable seguido de punto y parentesis sin argumento
