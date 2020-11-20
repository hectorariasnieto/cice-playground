import { showA } from './a.js'
import { showB } from './b.js'
import { showC } from './c.js'

export function selection() {
  var choose = prompt('Selecciona una opción', 'a, b, c')

  if (choose == 'a') {
    console.log(showA())
  } else if (choose == 'b') {
    console.log(showB())
  } else {
    console.log(showC())
  }
}
