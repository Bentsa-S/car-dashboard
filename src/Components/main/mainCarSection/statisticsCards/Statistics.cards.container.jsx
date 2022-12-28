import React from "react";
import {connect} from "react-redux";
import StatisticsCards from "./Statistics.cards";


const mapStateToProps = (state) => {
    return{
        statistics: state.meinCarSection.statistics
    }
}


const MapStatisticsCards = connect(mapStateToProps) (StatisticsCards)

export default MapStatisticsCards;