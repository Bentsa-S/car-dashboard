import React from "react";
import {connect} from "react-redux";
import SellCarsOfCar from "./Car";

const MapStateToProps = (props) => {
    return {
        carContainer: props.mainSellCarsSection.car
    }

}


let MapSellCarsOfCar = connect(MapStateToProps) (SellCarsOfCar)
export default MapSellCarsOfCar;