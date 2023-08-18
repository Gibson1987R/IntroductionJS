//Creando mi primera clase en js

class Producto {
  constructor(nombre, precio, color) {
    this.nombre = nombre
    this.precio = precio
    this.color = color
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
  }
}

const producto1 = new Producto('Drone', 239, 'Black')
console.log(producto1)
console.log(producto1.formatearProducto())

//Herencia: es la forma de pasar valores o metodos de un objeto a otro evitando el codigo repetido. Para ello se debe utilizar la palabra EXTENDS en el objeto que hereda mas el nombre de quien herada, de esa forma hereda todos los metodos que se tenga en el padre, pero si se requiere heredar el construcctor se necesita colocar en el construcctor hijo la funcion super con los parametros que se heredan del constructor padre.

//Si se quiere hacer ajustes a algun metodo heredado, dentro del hijo en invocando a super() podemos hacerlos en la estructura especifica del metodo en el hijo

class Libro extends Producto {
  //HERANDO EL CONSTRUCCTOR SON SUPER(NOMBRE, PRECIO)
  constructor(nombre, precio, isbn) {
    super(nombre, precio)
    this.isbn = isbn
  }

  //AJUSTE DEL METODO CON SUPER
  formatearProducto() {
    return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
  }
}

const libro1 = new Libro('JavaScript la Revolucion', 150, '1959782411297')
console.log(libro1)
console.log(libro1.formatearProducto())
