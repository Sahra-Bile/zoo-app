import { useNavigate } from 'react-router-dom'
import { IAnimals } from '../../models/IAnimals'
import './singelAnimal.scss'
import '../../style/container.scss'

interface ISingelAnimalProps {
  animal: IAnimals
}
export const SingelAnimal = (props: ISingelAnimalProps) => {
  const navigate = useNavigate()

  const showMoreClick = () => {
    navigate(`/animal/${props.animal.id}`)
  }

  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src =
      'https://img.theculturetrip.com/wp-content/uploads/2021/11/2c1074k-e1638197792976.jpg'
  }

  return (
    <>
      <div className="animal-container">
        <h1 className="animal-container__name">{props.animal.name}</h1>
        <div className="animal-container__imgwrapper">
          <img
            src={props.animal.imageUrl}
            alt={props.animal.name}
            onError={imageErrorHandler}
          />
        </div>
        <p className="animal-container__desc">
          {props.animal.shortDescription}
        </p>
        <button className="btn primary" onClick={showMoreClick}>
          Mer Info
        </button>
      </div>
    </>
  )
}
