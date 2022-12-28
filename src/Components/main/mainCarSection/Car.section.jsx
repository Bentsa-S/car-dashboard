import React from "react";
import './Car.section.style.css';
import CarCards from "./carCarts/Car.carts";
import MapCarCards from "./carCarts/Car.carts.container";
import MapStatisticsCards from "./statisticsCards/Statistics.cards.container";


const CarSection = () =>{
    return(
        <div className='background'>
            <MapStatisticsCards/>
            <MapCarCards/>
        </div>
    )
}


export default CarSection;