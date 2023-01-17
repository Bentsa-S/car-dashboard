import React from "react";
import {connect} from "react-redux";
import AssetsSchedule from "./Assets.scheduie";

let mapStateToProps = (state) =>{
    return{
        schedule: state.mainAssetsSection.schedule
    }
}


const MapAssetsSchedule = connect(mapStateToProps) (AssetsSchedule)
export default  MapAssetsSchedule;