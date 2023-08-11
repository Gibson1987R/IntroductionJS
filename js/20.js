//Metodos de propiedad: Son funciones que tienen las sintaxis de metodo.

let separador = '-+-+-+-+-+-+-+-+-'

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo la cancion con ID ${id}`)
  },
  pausado: function () {
    console.log('Pausando la cancion . . .')
  },
  creandoPlayList: function (nombre) {
    console.log(`Creando la PlayList con el nombre ${nombre}`)
  },
  eliminarPlayList: function (nombre) {
    console.log(`Eliminada la PlayList con el nombre ${nombre}`)
  },
}

console.log(reproductor)
console.log(separador)

reproductor.reproducir(1982)
console.log(separador)

reproductor.pausado()
console.log(separador)

//Los metodos de propiedad se pueden crear por fuera del objeto.
reproductor.eliminar = function (id) {
  console.log(`Eliminando la cancion con ID ${id}`)
}

reproductor.eliminar(89)
console.log(separador)

reproductor.creandoPlayList('Metal Duro y Puro')
console.log(separador)

reproductor.eliminarPlayList('Rocola Vallenata')
console.log(separador)
