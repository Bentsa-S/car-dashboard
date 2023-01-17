import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/assets.png'
import {NavLink} from "react-router-dom";

const Assets = () =>{
    return(
        <NavLink to='/Assets' className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>Assets</h1>
        </NavLink>
    )
}

export default Assets;