//Try Catch: para cuando se tirra un error en el codigo, JS tiende a leer hasta conseguir un error; al conseguirlo se rompe la ejecucion. Y aunque es prueba de errores no es necesario usarlo en todos lados, ni que el codigo este todos try catch sino solo en situaciones especificas.

const numero1 = 20
const numero3 = 30

console.log(numero1)

try {
  //Es la parte que va intentar hacer algo.
  console.log(numero2)
} catch (error) {
  //Si no puede try catch toma el error y lo presenta o maneja
  console.log(error)
}

console.log(numero3)
