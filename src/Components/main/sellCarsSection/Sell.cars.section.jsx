import React from "react";
import MapSellCarsOfCar from "./Car/Car.container";
import MapSellCarOfOffer from "./Offers/Offers.container";


const SellCarsSection = () => {
    return(
        <div className={'background'}>
            <h1>Sell Car</h1>
            <div>
                <MapSellCarsOfCar/>
            </div>
            <h2>Offers</h2>
            <MapSellCarOfOffer/>
        </div>
    )
}


export default SellCarsSection;