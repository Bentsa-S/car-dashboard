import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/sellCars.png'

const SellCars = () => {
    return(
        <div className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>SellCars</h1>
        </div>
    )
}

export default SellCars;