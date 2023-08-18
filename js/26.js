//This: ser refiere al contexto dentro del cual se ejecuta un metodo, dentro de los mismo valores de la variable que llama a la funcion o metodo. Es importante decir que los metodos deben definirse con function y no con arrow function si se quiere usar This, ya que los arrow function apuntan a la ventana global.

let separador = '*-*-*-*-*-*-*-*-*-*-*-*-*-*'

//Este es un objeto literal
const reservacion = {
  nombre: 'Gibson',
  apellido: 'Rosales',
  edad: 35,
  cc: 1127395,
  total: 2500,
  pagado: false,
  //forma 1 de metodo de propiedad, no se usa clases
  informacion: function () {
    console.log(
      `El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`
    )
  },
  // forma 2 de metodo se usa en todos los objetos
  identidad() {
    console.log(
      `Esta persona ${this.nombre} ${this.apellido} con CC ${this.cc} tiene una edad de ${this.edad}`
    )
  },
}

console.log(reservacion.nombre)
console.log(separador)

reservacion.informacion()
console.log(separador)

reservacion.identidad()
console.log(separador)
