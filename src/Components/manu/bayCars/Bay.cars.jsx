import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/bayCars.png'

const BayCars = () => {
    return(
        <div className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>BayCars</h1>
        </div>
    )
}

export default BayCars;