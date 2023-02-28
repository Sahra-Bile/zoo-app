import React from 'react'
import { Link } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingelAnimal'

interface IFedStatusProps {
  animal: ISingelAnimal
  feedAnimal(animal: ISingelAnimal): void
}
export const FedStatus = (props: IFedStatusProps) => {
  const changeFedStatus = (singleAnimal: ISingelAnimal) => {
    props.feedAnimal(singleAnimal)
  }

  return (
    <>
      <div className="fed-status">
        <p>senast matad:</p> <p>{props.animal.lastFed}</p>
        <br />
        {props.animal.isFed ? (
          <button className="btn primary" disabled>
            {props.animal.name} har fått mat
          </button>
        ) : (
          <button
            className="btn primary"
            onClick={() => {
              changeFedStatus(props.animal)
            }}
          >
            Mata {props.animal.name}
          </button>
        )}
        <div className="back">
          <Link to={'/'}>
            <span className="btn primary">Gå tillbaka till första sidan!</span>
          </Link>
        </div>
      </div>
    </>
  )
}
