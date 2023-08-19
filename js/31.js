const boton = document.querySelector('#boton')
console.log(boton)

//todas las apis utilizan promise porque necesitan permiso del usuario, las apis manejan en js de manera integra el resolve reject asi que no tenemos que preocuparnos por ello

boton.addEventListener('click', function () {
  Notification.requestPermission().then((resultado) =>
    console.log(`El resultado es ${resultado}`)
  )
})

if (Notification.permission == 'granted') {
  new Notification('Esta es una notificacion', {
    icon: 'img/ccj.png',
    body: 'Codigo con Samuel los mejores aprendizajes',
  })
}
