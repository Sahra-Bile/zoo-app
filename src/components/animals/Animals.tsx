import { useEffect, useState } from 'react'
import { IAnimals } from '../../models/IAnimals'
import { getAnimals } from '../../services/animalsService'
import './animals.scss'
import '../../style/container.scss'
import { SingelAnimal } from '../singelAnimal/SingelAnimal'
import { getAnimalFromLs, saveAnimalToLs } from '../../services/storageService'

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimals[]>(getAnimalFromLs())

  useEffect(() => {
    const getData = async () => {
      let AnimalsFromApi = await getAnimals()
      setAnimals(AnimalsFromApi)
      saveAnimalToLs(AnimalsFromApi)
    }

    let animalList: IAnimals[] = getAnimalFromLs<IAnimals>()
    if (animalList.length !== 0) {
      return
    } else {
      getData()
    }
  })

  let animalHtml = animals.map((animal) => {
    return <SingelAnimal animal={animal} key={animal.id}></SingelAnimal>
  })

  return <div className=" container big-container ">{animalHtml}</div>
}
