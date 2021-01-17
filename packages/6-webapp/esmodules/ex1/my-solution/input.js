import { showA } from './a.js'
import { showB } from './b.js'
import { showC } from './c.js'

export function selection() {
  var choose = prompt('Selecciona una opción: a, b, c')

  if (choose === 'a') {
    showA()
  } else if (choose === 'b') {
    showB()
  } else if (choose === 'c'){
    showC()
  } else{
    alert('no me vale')
  }
}
