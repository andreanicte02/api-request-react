
import './FoodTable.css';

export default function AppFoodTable({
    listFoodData
}) {

    return (

        <>
            <section className='foodTitle'>
                <div>
                    <h1>Platillos Free (Prueba Tecnica)</h1>
                </div>

                <div id='espacio'>

                </div>
            </section>


            <section className='foodTable'>
                <table>
                    <tbody>

                        <tr>
                            <th>
                                <label>Platillo</label>
                            </th>
                            <th>
                               <label> Detalles</label>
                            </th>
                            <th>
                                <label>Imagen</label>
                            </th>
                        </tr>

                        {
                            listFoodData.map((element, i) => (
                                <tr key={i}>
                                    <td>{element.strMeal}</td>
                                    <td>
                                        <h5>
                                            Categoria: {element.strMeal}
                                        </h5>
                                        <h5>
                                            Origen: {element.strCategory}
                                        </h5>
                                        <h5>
                                            Video: {element.strYoutube}
                                        </h5>

                                    </td>
                                    <td>

                                        <img style={{ widht: '80px', height: '10 £0px' }} src={element.strMealThumb}></img>

                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </section>

        </>
    )
}
