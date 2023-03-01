import React from 'react'
import { Link } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingelAnimal'
import './animalDetails.scss'

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
        <p className="lastFeed"> senast matad:</p>{' '}
        <p className="lastFeed">{props.animal.lastFed}</p>
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
            Mata {props.animal.name} det har gått mer än 3 timmar nu
          </button>
        )}
        <div className="back">
          <Link to={'/'}>
            <span className="btn primary">Gå tillbaka till startsida</span>
          </Link>
        </div>
      </div>
    </>
  )
}
