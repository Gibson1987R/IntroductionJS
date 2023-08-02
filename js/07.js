//Ordende operaciones en JS

let result = 20 + 30 * 2
console.log(`Sin usar parentesis ${result}`)

result = (20 + 30) * 2
console.log(`Usando parentesis para cambiar el comportamiento ${result}`)

let separador = '-----------'
console.log(separador)

//Incrementos
let puntaje = 10
console.log(puntaje)
console.log(separador)
++puntaje //Si de esta manera incrementamos en 1
console.log(puntaje)
console.log(separador)

puntaje += 15 //Se incrementa en cantidad especifica
console.log(puntaje)
console.log(separador)

puntaje -= 15 //Se decrementa en cantidad especifica
console.log(puntaje)
console.log(separador)

--puntaje //Se decrementa en 1
console.log(puntaje)
console.log(separador)
