import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/assets.png'

const Assets = () =>{
    return(
        <div className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>Assets</h1>
        </div>
    )
}

export default Assets;