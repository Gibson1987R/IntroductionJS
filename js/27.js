//POO: para JS utiliza prototype

let separador = '-*-*-*-*-*-*-'

//Objeto Literal: son los mas comunes; pero en ello somos nosotros quienes pasamos todos los datos con codigo duro.
const producto = {
  nombre: 'Tablet',
  precio: 500,
}
console.log(separador)
//Objeto Constructor: son los mas dinamico, no son los mas comunes, se parecen mas a una funcion, y es el estado antes de las clases. Un buena practica es que los nombres de los objetos clases debe estar en Mayusculas.

//Clases: es la manera de almacenar los datos, forma y estructura que va tener un objeto. En otras palabras es una plantilla

function Producto(nombre, precio, disponible) {
  this.nombre = nombre
  this.precio = precio
  this.disponible = disponible
}

//Para crear objetos con nuestra plantilla, tenemos que instanciarlos, y a ellos les podemos pasar argumentos

producto2 = new Producto('Monitor Curvo de 40"', 250, true) //instancia
console.log(producto2)
console.log(separador)

producto3 = new Producto('Celular A21S', 170, false)
console.log(producto3)
console.log(separador)

//Crear funciones que solo se utilizarn en el objeto especifico
Producto.prototype.formatearProducto = function () {
  return `El Producto ${this.nombre} tiene un precio de ${this.precio}`
}

//PROTOTYPE: Un prototype puede crear funciones que estan ligadas a un tipo de objeto.

//Por ejemplo, si quiero formatear el Objeto Producto para que me aviente informacion de manera mas estructura o legible tengo que crear una funcion.

/* function formatearProducto(producto) {
  return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`
}

console.log(formatearProducto(producto2))
*/
//Pero si quisiera formatear este Objeto Cliente, tengo que crear otra funcion ya que no funciona para el, y si existiese otro seria otra funcion y asi sucesivamente.

function Cliente(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

cliente1 = new Cliente('Gibson', 'Rosales')
console.log(cliente1)
console.log(separador)

/* console.log(formatearProducto(cliente1)) */ //No funciona para este tipo de objeto de manera correcta, puesto que los valores no se relacionan.

//Los prototype nos permiten evitar crear funciones de manera descontrolada para diferentes objetos, creando funciones para modelos de objetos en especifico.

//Para esto de crear un prototype, tenemos que tranformar la funcion de formatear enlazandola al tipo de objeto que de producto como una propiedad. NombreTipoObjeto.prototype.nombreFuncion = function(sinObjeto){return `Descripcion ${this porque esta enlazado al tipo de objeto}`}

//USANDO EL PROTOTYPE: nombreObjeto.nombreFuncion(sinArgumento)

console.log(producto2.formatearProducto())
console.log(separador)

//Tira un error porque no es una funcion valida para el objeto
/* console.log(cliente1.formatearProducto()) 
console.log(separador)
*/

Cliente.prototype.formatearCliente = function () {
  return `Este cliente ${this.nombre} ${this.apellido} es miembro activo de la plataforma`
}

//USAMOS PROTOTYPE PARA CLIENTE
console.log(cliente1.formatearCliente())
console.log(separador)

//EJEMPLO DEFINITIVO CLASES O PROTOTYPE EN JS

//CREAR LA PLANTILLA O CLASE DEL TIPO DE OBJETOS ALUMNOS
function Alumno(nombre, apellido, edad, promedio) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.promedio = promedio
}

//CREA FUNCION O LAZO PROTOTYPE PARA EL TIPO OBJETOS ALUMNO
Alumno.prototype.presentaPromedio = function () {
  return `La persona ${this.nombre} ${this.apellido} obtuvo ${this.promedio} de promedio academico`
}

//INSTANCIAR UN OBJETO DE CLASE O PROTOTYPE ALUMNO
alumno1 = new Alumno('Anais', 'Perez', 33, 17)

//CONSULTO EL OBJETO
console.log(alumno1)
console.log(separador)

//USO LA UNA FUNCION DEL PROTOTYPE ESPECIFICO ALUMNO
console.log(alumno1.presentaPromedio())
console.log(separador)
