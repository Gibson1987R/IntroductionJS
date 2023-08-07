//Las funciones son instrucciones o bloques reutilizables, que hacen al codigo mas facil y ordenado para mantener

//Declaracion de funcion: utiliza la palabra reservada function seguido de un nombre con las mismas reglas que para nombrar variables.

function sumar() {
  console.log(6 + 6)
}
sumar() //Llamada de la funcion, esto es para utilizarla

//Expresion de la funcion: utiliza a la funcion como la expresion de una variables.

const sumar2 = function () {
  console.log(4 + 5)
}
sumar2()

/* 

//IIFE sirve para proteger las variables para que no se mezclen con otro archivo
(function () {
  console.log('Esto es una funcion')
})() */

//La diferencia entre declaracion y expresion es que: el hoistin. Esto es que cuando JS se ejecuta lo hace en dos vueltas, en la primera la de creacion alli se registra y toma a las funciones; en la segunda etapa en esta se mandan a llamar el codigo de las funciones. Entonces en las declaraciones de funciones, tenemos la posibilidad de que apesar que llamemos la funcion antes de declararla esta pueda ser utilizada sin importar; pero con las funciones expresion nos tira un error.
