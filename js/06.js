//Numeros

//Los string aparecen en negro en la consola, los numeros no
const miNombre = 'Samuel'

//Todos los numeros son tratados por igual
const numero1 = 100
const numero2 = 200
const numero3 = 200.55
const numero4 = -5

//El trabajo con numero se reduce siempre a operaciones
//Las operaciones son las mismas; pero la importancia de % para definir si algo es divisibles por o saber su residuo
console.log(numero1 + numero2)
console.log(numero2 - numero4)
console.log(numero3 * numero1)
console.log(numero3 / numero4)
console.log(numero4 % numero1)

//Objeto Math
//Tiene diferentes metodos como .random() .PI .round()

//PI como en la escuela
let result = Math.PI
console.log(`Este es el valor pi ${result}`)
result = Math.round(2.5) // redondea hacia o hacia arriba
console.log(`Este es el valor round ${result}`)

result = Math.ceil(8.2) // forza el redondeo hacia arriba
console.log(`Este es el valor ceil ${result}`)

result = Math.floor(6.9) // forza el redondeo hacia abajo
console.log(`Este es el valor floor ${result}`)

result = Math.sqrt(625) //Extrae la raiz cuadrada
console.log(`Este es el valor sqrt ${result}`)

result = Math.min(2, 3, 6, 0, 24) //Extrae el minimo
console.log(`Este es el valor minimo ${result}`)

result = Math.max(2, 3, 6, 0, 24) //Extrae el maximo
console.log(`Este es el valor maximo ${result}`)

result = 15 + Math.floor(Math.random() * 5) // combinacion
console.log(
  `Este es el valor combinacion floor y random para sumar a 15 un valor entre 0 y 5 ${result}`
)
