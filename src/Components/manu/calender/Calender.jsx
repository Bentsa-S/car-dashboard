import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/calender.png'

const Calender = () => {
    return(
        <div className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>Calender</h1>
        </div>
    )
}

export default Calender;