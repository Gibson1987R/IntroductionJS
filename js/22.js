//Estructuras de control: permiten validar que se cumpla una condicion determinada, para saber que se cumple, la condicion debe ser comparada contra algo. Puede ser con: == === !==

let separar = '-+-+-+-+-+-+-+-+-+-+-'
const puntaje = 1001

if (puntaje == 1000) {
  console.log('Si el puntaje es 1000')
} else {
  console.log('Lo siento no es igual')
}

let carrito = 600

if (puntaje > carrito) {
  console.log('El usuario puede pagar')
} else {
  console.log('Fondos insuficientes')
}

const rol = 'EDITOR'

if (rol === 'ADMINISTRADOR') {
  console.log('Tienes acceso a todo el sistema')
} else if (rol === 'EDITOR') {
  console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
} else {
  console.log('No tienes acceso')
}
