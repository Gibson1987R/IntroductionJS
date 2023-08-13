//switch
const metodoPago = 'BTC'

switch (metodoPago) {
  case 'tarjeta':
    console.log('Pagaster con tarjeta')
    break
  case 'BTC':
    console.log('Las cripto son el futuro, Ya pagaste')
    break
  default:
    console.log('Este metodo no esta considerado para pagar')
    break
}
