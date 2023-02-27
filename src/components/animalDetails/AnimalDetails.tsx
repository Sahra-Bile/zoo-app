import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingelAnimal'

import { getAnimalFromLs, saveAnimalToLs } from '../../services/storageService'

export const AnimalDetails = () => {
  const [animal, setAnimal] = useState<ISingelAnimal>({
    id: 0,
    name: '',
    yearOfBirth: 0,
    latinName: '',
    longDescription: '',
    imageUrl: '',
    isFed: false,
    lastFed: '',
  })
  let animalList: ISingelAnimal[] = getAnimalFromLs<ISingelAnimal>()

  let params = useParams() as { id: string }

  useEffect(() => {
    for (let i = 0; i < animalList.length; i++) {
      if (+params.id === animalList[i].id) {
        setAnimal(animalList[i])
      }
    }
  }, [])

  const feedAnimal = () => {
    let newFedAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date().toString(),
    }
    setAnimal(newFedAnimal)
    for (let i = 0; i < animalList.length; i++) {
      if (animalList[i].id === newFedAnimal.id) {
        animalList[i] = newFedAnimal
        saveAnimalToLs(animalList)
      }
    }
  }
  getAnimalFromLs()

  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src =
      'https://img.theculturetrip.com/wp-content/uploads/2021/11/2c1074k-e1638197792976.jpg'
  }
  return (
    <div className="singelAnimal-container">
      <h1>{animal.name}</h1>
      <h2>{animal.latinName}</h2>
      <div className="imgWrapper">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={imageErrorHandler}
        />
      </div>
      <span>{animal.yearOfBirth}</span>
      <p>{animal.longDescription}</p>
      <div className="fed-container">
        <span>
          {' '}
          Senast Matad: {animal.lastFed} {animal.isFed.toString()}
        </span>
        <p>
          {animal.isFed ? (
            <button className="btn primary" disabled>
              Redan matad {animal.name}!
            </button>
          ) : (
            <button className="btn primary" onClick={feedAnimal}>
              Mata {animal.name}!
            </button>
          )}
        </p>
      </div>
    </div>
  )
}
