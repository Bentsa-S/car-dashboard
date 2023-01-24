import React from "react";
import {connect} from "react-redux";
import SellCarsOfOffer from "./Offers";


let MepStateToProps = (props) => {
    return{
        offerDetails: props.mainSellCarsSection.offerDetails.data1
    }
}


let MapSellCarOfOffer = connect(MepStateToProps) (SellCarsOfOffer);
export default MapSellCarOfOffer;