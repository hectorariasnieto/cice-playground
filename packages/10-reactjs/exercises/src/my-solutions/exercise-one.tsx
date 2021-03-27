import { FC } from 'react'

export const ExerciseOne: FC = () => {
  const numbers = []

  for (let i = 0; i < numbers.length; i++) {

    numbers.push(i)
  }

  return(
    <ul>
      {numbers.map(x => <li key={x}>{x}</li>)}
    </ul>
  )
}

//crear rango desde

export const ExerciseOneRange: FC = () => {
  const numbers = Array.from({length:50}, (v,k) => k)

  return (
    <ul>
      <li>{range(50).map(x => <li key={x}>{x}</li>)}</li>
    </ul>
  )
}
