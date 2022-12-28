import React from "react";
import {connect} from "react-redux";
import CarCarts from "./Car.carts";
import '../Car.section.style.css'



const mapStateToProps = (state) => {
    return{
        cards: state.meinCarSection.car
    }
}


const MapCarCards = connect(mapStateToProps) (CarCarts)

export default MapCarCards;