//* Fetch API: es la forma de consumir todo JSON provisto por un lenguaje de BACKEND, es ademas el nuevo estandar para remplazar a AJAX

//* JSON: Es un lenguaje de transporte de datos, es similar a un objeto; pero requiere necesariamente que las comillas sean dobles

//! el ultimo elemento de un JSON no puede llevar coma al final

//* Forma de usar Fetch API

//? Forma con Promises sin Async
function obtenerEmpleados() {
  const archivoURL = 'js/empleados2.json'

  fetch(archivoURL)
    .then((result) => result.json())
    .then((datos) => {
      console.log(datos) //Datos del JSON

      console.log(datos.empleados) //Array dentro de los Datos

      //* Forma 1 de acceder al array de empleados
      const empleados = datos.empleados

      empleados.forEach((empleado) => {
        console.log(empleado)
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.puesto)
        console.log('-*-*-*-*-*-')
      })
    })
    .catch((error) => console.log(error))
}
obtenerEmpleados()

//! Forma usando Async / Await
async function obtenerEmpleados2() {
  const archivoURL = 'js/empleados.json'

  const resultado = await fetch(archivoURL)
  const datos = await resultado.json()
  console.log(datos) //Datos del JSON

  //* Forma 2 de acceder al array empleados
  const { empleados } = datos

  console.log(empleados) //Array dentro de los Datos

  empleados.forEach((cf) => {
    console.log(cf)
    console.log(cf.id)
    console.log(cf.nombre)
    console.log(cf.puesto)
  })
}
obtenerEmpleados2()
