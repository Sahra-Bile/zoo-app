import { useNavigate } from 'react-router-dom'
import { IAnimals } from '../../models/IAnimals'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './singelAnimal.scss'
import '../../style/container.scss'

interface ISingelAnimalProps {
  animal: IAnimals
}
export const SingelAnimal = (props: ISingelAnimalProps) => {
  const navigate = useNavigate()

  const notify = () => {
    if (Date.now() - +new Date(props.animal.lastFed).getTime() > 10800000) {
      toast(props.animal.name + ' har inte fått mat!')
    } else {
      toast(props.animal.name + ' har fått mat!')
    }
  }

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

        <button className=" btn primary custom-btn" onClick={notify}>
          {' '}
          kolla om djuren har fått mat!
        </button>
        <ToastContainer />
      </div>
    </>
  )
}
