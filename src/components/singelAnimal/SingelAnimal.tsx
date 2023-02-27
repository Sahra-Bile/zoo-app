import { useNavigate } from 'react-router-dom'
import { IAnimals } from '../../models/IAnimals'
import './singelAnimal.scss'

interface ISingelAnimalProps {
  animal: IAnimals
}
export const SingelAnimal = (props: ISingelAnimalProps) => {
  const navigate = useNavigate()

  const showMoreClick = () => {
    navigate(`/animal/${props.animal.id}`)
  }

  return (
    <div className="animal-container">
      <h1 className="animal-container__name">{props.animal.name}</h1>

      <div className="animal-container__imgwrapper">
        <img src={props.animal.imageUrl} alt={props.animal.name} />
      </div>
      <pre className="animal-container__desc">
        {props.animal.shortDescription}
      </pre>
      <button onClick={showMoreClick}>Läs mer</button>
    </div>
  )
}
