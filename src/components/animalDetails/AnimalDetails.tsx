import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingelAnimal'
import { FedStatus } from './fedStatus'
import { getAnimalFromLs, saveAnimalToLs } from '../../services/storageService'
import './animalDetails.scss'

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

  let params = useParams() as { id: string }

  useEffect(() => {
    let currentDate = new Date().getTime()
    let animalsFromLS: ISingelAnimal[] = getAnimalFromLs()

    let hours = Math.floor(10800000)

    //*  kontrollera om det gått mer än 3 timmar sedan senast  djuren blev matades - uppdatera till false

    for (let i = 0; i < animalsFromLS.length; i++) {
      if (+currentDate - new Date(animalsFromLS[i].lastFed).getTime() > hours) {
        animalsFromLS[i].isFed = false
      }

      //* jämför id, få rätt djur och ange tillstånd.
      if (+params.id === animalsFromLS[i].id) {
        setAnimal(animalsFromLS[i])
      }
    }
    //* spara i  localstorage
    saveAnimalToLs(animalsFromLS)
  }, [])

  //* if isFed value = false - uppdatera till true och spara till lokalStorage
  const feedAnimal = (animal: ISingelAnimal) => {
    animal.isFed = true
    let feedTime = new Date()
    animal.lastFed = feedTime.toLocaleString()
    setAnimal({ ...animal })

    let animalsFromLS: ISingelAnimal[] = getAnimalFromLs()

    for (let i = 0; i < animalsFromLS.length; i++) {
      if (animal.id === animalsFromLS[i].id) {
        animalsFromLS[i] = { ...animal }
      }
    }

    saveAnimalToLs(animalsFromLS)
  }

  return (
    <div className="singelAnimal-container ">
      <h1 className="singelAnimal-container__name"> Namn: {animal.name}</h1>
      <h2 className="singelAnimal-container__latinName">
        Latin Namn: {animal.latinName}
      </h2>
      <div className="singelAnimal-container__imgWrapper">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) =>
            (e.currentTarget.src =
              'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')
          }
        />
      </div>
      <span className="singelAnimal-container__bith">
        Född: {animal.yearOfBirth}
      </span>
      <p className="singelAnimal-container__desc">{animal.longDescription}</p>
      <FedStatus animal={animal} feedAnimal={feedAnimal} />
    </div>
  )
}
