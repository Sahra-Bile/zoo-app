import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingelAnimal'
import './animalDetails.scss'

interface IFedStatusProps {
  animal: ISingelAnimal
  feedAnimal(animal: ISingelAnimal): void
}
export const FeedStatus = (props: IFedStatusProps) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="fed-status">
        <p className="lastFeed"> senast matad:</p>{' '}
        <p className="lastFeed">{props.animal.lastFed}</p>
        <br />
        {props.animal.isFed ? (
          <button type="button" className="btn primary" disabled>
            {props.animal.name} har fått mat
          </button>
        ) : (
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              props.feedAnimal(props.animal)
            }}
          >
            Mata {props.animal.name} det har gått mer än 3 timmar
          </button>
        )}
        <div className="back">
          <button
            type="button"
            className="btn primary"
            onClick={() => navigate(-1)}
          >
            Tillbaka
          </button>
        </div>
      </div>
    </>
  )
}
