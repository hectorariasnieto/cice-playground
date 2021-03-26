import React, { FC } from 'react'

export const ExerciseOne: FC = () => {
  const numbers = []

  for (let i = 0; i < 50; i++){
    numbers.push(<li>{i}</li>)
  }

  return(
    <ul>
      {numbers}
    </ul>
  )
}
