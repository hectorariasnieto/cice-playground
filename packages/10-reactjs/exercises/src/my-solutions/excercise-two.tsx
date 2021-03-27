import {FC} from 'react'

export const ExerciseTwo: FC = () =>{
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter (counter + 1)}></button>
      <h1>{counter}</h1>
    </div>
  )
}
