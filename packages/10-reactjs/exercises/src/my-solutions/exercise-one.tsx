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
  const range = Array.from({length:50}, (k,v) => v)

  return (
    <ul>
      {range.map(x =>
        <li key={x}>{x + 1}</li>)}
    </ul>
  )
}
