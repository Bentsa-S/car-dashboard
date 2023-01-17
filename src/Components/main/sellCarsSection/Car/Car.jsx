import React from "react";
import img from '../../../../icone/iconeSellCars/cars/icone.png'


const SellCarsOfCar = (props) => {
    return(
        <div>
            <h2>{props.carContainer.name}</h2>
            <img src={props.carContainer.imgCar}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
        </div>
    )

}

export default SellCarsOfCar;