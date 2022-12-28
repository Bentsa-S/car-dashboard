import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/car.png'
import {NavLink} from "react-router-dom";

const Booking = () =>{
    return(
        <NavLink to='/Booking' className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>Booking</h1>
        </NavLink>
    )
}

export default Booking;