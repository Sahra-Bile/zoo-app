import axios from 'axios';
import { IAnimalApiResponse } from '../models/IAnimalApiResponse';
const Base_URL = "https://animals.azurewebsites.net/api/animals/";

export const getSingelAnimalById = async(id:number):Promise<IAnimalApiResponse> =>{
 
  try{ let response = await axios.get(Base_URL +id);

    return { animal: response.data, error: "" };
  } catch {
    return { error: "Ett fel har inträffat" };
  }
};



