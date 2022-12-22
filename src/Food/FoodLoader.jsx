import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodTable from './FoodTable';

export default function AppFoodLoaderj() {


  const urlApi = `https://www.themealdb.com/api/json/v1/1/random.php`

  const [foodData, setfoodData] = useState([])


  useEffect(() => {

    const loadData = async () => {

      let cont = 0;
      let listaFood = [];

      while (cont < 30) {

        const result = await axios.get(urlApi);
        const idMeal = result.data.meals[0].idMeal;
        //usar un map
        if(listaFood.find(elment=>(
          elment.idMeal===idMeal
        ))){

          continue;
        }

        listaFood.push(result.data.meals[0]);
        cont++;

      }

      setfoodData(listaFood);

    }

    loadData();

  }, [])



  return (
    <>

      {

        foodData && <FoodTable
          listFoodData={foodData}
        />

      }

    </>

  )
}
