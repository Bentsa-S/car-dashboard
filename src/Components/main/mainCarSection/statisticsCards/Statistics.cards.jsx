import React from "react";
import '../Car.section.style.css'


const StatisticsCard = (props) =>{
    const background= {
        background:  props.backgroundLogoColor
    }
    return(
        <div className='containerCardStatistic'>
            <div className='backgroundLogoStatistic' style={background}>
                <img src={props.logo}/>
            </div>
            <h1>{props.name}</h1>
            <src>
                <circle></circle>
            </src>
        </div>
    )
}


const StatisticsCards = (props) =>{
    console.log(props)

    let cardsElement = props.statistics.map(card => <StatisticsCard backgroundLogoColor = {card.backgroundLogoColor} logo = {card.logo} name = {card.name}/> )
    return(
        <div className='flex'>
            {cardsElement}
        </div>
    )
}

export default StatisticsCards;