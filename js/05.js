/* //Metodos sobre los String o Cadenas de Texto
length varible.length para conocer la extension
IndexOf varible.indexOf('Str') permite conocer la posicion donde encuentra si se encuentra 'str o caracter' dentro de la la cadena
*/

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
const producto2 = 'Monitor HD'

//length es para la extension
console.log(tweet.length)
console.log(producto2)

//IndexOf  retorna la posicion donde se encuentra
console.log(tweet.indexOf('con'))
console.log(producto2.indexOf('con'))

//Incledes retorna true o false
console.log(tweet.includes('con'))
console.log(producto2.includes('con'))
