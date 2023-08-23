// * Async / await

function descargarClientes() {
  return new Promise((resolve) => {
    console.log('Descargando clientes... espere...')

    setTimeout(() => {
      resolve('Los clientes fueron descargados')
    }, 5000)
  })
}
function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log('Descargando pedidos... espere...')

    setTimeout(() => {
      resolve('Los pedidos fueron descargados')
    }, 3000)
  })
}

// ? Para usar una Async se le debe crear una funcion con la palabra async, y dentro de esta se asigna el valor que se quiere espera con la paralabra await

// * Lo que se espera o puede ser conflixtivo, se coloca dentro de un try / catch

//

async function app() {
  try {
    /*     
    ! No colocar una segunda llamada de manera seguida una detras de otras a menos que dependa de la primera.

    ! En cadenar promesas una detras de la otra, hace que el tiempo de espera se sume.
    const clientes = await descargarClientes()
    const pedidos = await descargarUltimosPedidos()
    console.log(clientes)
    console.log(pedidos) 
    */

    //? La forma correcta de hacer varias llamadas es utilizar Promises.all(), el cual nos devuelve un array de promesas.

    //? Utilizar Promises.all(), permiten que los dos llamados salga a la vez, y solo demorara lo que tarde la de mayor tiempo

    const resultado = await Promise.all([
      descargarClientes(),
      descargarUltimosPedidos(),
    ])

    console.log(resultado) // *Array
    console.log(resultado[0]) // *Primera posicion
    console.log(resultado[1]) // *Segunda
  } catch (error) {
    console.log(error)
  }
}

app()

console.log('Este codigo no se bloquea')
