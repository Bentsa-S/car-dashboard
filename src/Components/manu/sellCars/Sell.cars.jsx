import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/sellCars.png'
import {NavLink} from "react-router-dom";

const SellCars = () => {
    return(
        <NavLink to={'/SellCars'} className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>SellCars</h1>
        </NavLink>
    )
}

export default SellCars;