//Promise(): es una situacion que puede ocurrir o no en el futuro. Esta se instancian con new Promise(usando function o arrow function si no hay this) Tomo Promise utiliza dos parametros resolve y reject, los cuales son funciones EXISTENTES que se ejecuntan si se cumple con una condicion o no

const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = false

  if (auth) {
    resolve('CARAMBA ESTAS AUTENTICO') // EL PROMISE SE CUMPLE
  } else {
    reject('MIERDA NO ERES DE POR AQUI') // EL PROMISE NO SE CUMPLIO
  }
})

console.log(usuarioAutenticado) //solo sirve para ver el estado del promise

//Existen 3 posibles valores en los promises, son muy comunes cuando consultamos una api
//Pending: No se ha cumplido pero tampoco rechazado
//Fulfillend: Ya se cumplio
//Rejected: se ha rechadado no se cumplio

usuarioAutenticado
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })
