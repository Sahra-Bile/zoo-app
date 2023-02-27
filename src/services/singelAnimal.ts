import axios from 'axios';
import { ISingelAnimal } from '../models/ISingelAnimal';
const Base_URL = "https://animals.azurewebsites.net/api/animals";

export const getSingelAnimal = async(id:number):Promise<ISingelAnimal[]> =>{
 let responsive = await axios.get(Base_URL+id);

  return  responsive.data;
}
