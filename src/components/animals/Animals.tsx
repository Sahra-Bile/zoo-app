import { useEffect, useState } from 'react'
import { IAnimals } from '../../models/IAnimals'
import { getAnimals } from '../../services/animalsService'
import './animals.scss'
import { SingelAnimal } from '../singelAnimal/SingelAnimal'

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimals[]>([])

  useEffect(() => {
    const getData = async () => {
      let AnimalsFromApi = await getAnimals()
      setAnimals(AnimalsFromApi)
    }

    if (animals.length > 0) return
    getData()
  })

  let animalHtml = animals.map((animal) => {
    return <SingelAnimal animal={animal} key={animal.id}></SingelAnimal>
  })

  return <div className="animal-container">{animalHtml}</div>
}
