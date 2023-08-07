//Funciones con parametros y argumentos.

//Parametros son los que van en el cuerpo de la funcion, actuando como variables dentro de ella.

function sumar(numero1, numero2) {
  console.log(numero1 + numero2)
}

//Argumentos son los que van el llamado de funcion; valores reales que pasamos.
sumar(7, 30)
sumar(7, 55)
sumar(6, 3)
sumar(1, 3)

//Parametros por default, nos permiten tener un valor por si algun argumento no es pasado?
const sumar2 = (n = 0, n1 = 0) => {
  console.log(n + n1)
}
sumar2(5)
