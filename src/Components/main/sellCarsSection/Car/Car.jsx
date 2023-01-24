import React from "react";
import img from '../../../../icone/iconeSellCars/cars/icone.png'
import '../Sell.cars.style.css'


const SellCarsOfCar = (props) => {
    return(
        <div className={'carContainerSellCar'}>
            <h2>{props.carContainer.name}</h2>
            <img className={'imgCarSellCar'} src={props.carContainer.imgCar}/>
            <img className={"imgStandSellCar"} src={img}/>
            <img className={"imgStandSellCar1"} src={img}/>
            <img className={"imgStandSellCar2"} src={img}/>
        </div>
    )

}

export default SellCarsOfCar;