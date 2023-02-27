import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ISingelAnimal } from '../../models/ISingelAnimal'
import { getSingelAnimalById } from '../../services/singelAnimalService'

export const AnimalDetails = () => {
  const [animalDetals, setAnimalDetals] = useState<ISingelAnimal>()
  const [error, setError] = useState('')

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      if (id) {
        let response = await getSingelAnimalById(+id)

        if (response.animal) {
          setAnimalDetals(response.animal)
        } else {
          setError(response.error)
        }
      }
    }
    if (animalDetals) return

    getData()
  })

  return (
    <div className="container">
      {error !== '' ? (
        <div className="error">
          <h2>{error}</h2>
        </div>
      ) : (
        <div className="singelAnimal-container">
          <h1>{animalDetals?.name}</h1>
          <h2>{animalDetals?.latinName}</h2>
          <div className="imgWrapper">
            <img src={animalDetals?.imageUrl} alt={animalDetals?.name} />
          </div>
          <span>{animalDetals?.yearOfBirth}</span>
          <p>{animalDetals?.longDescription}</p>
          <div className="fed-container">
            <span>{animalDetals?.lastFed}</span>
            <span>{animalDetals?.isFed}</span>
          </div>
        </div>
      )}
    </div>
  )
}
