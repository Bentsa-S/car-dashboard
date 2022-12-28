import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/services.png'

const Services = () => {
    return(
        <div className={module.flex}>
            {/*<img className={module.icons} src={logo}/>*/}
            <h1 className={module.text}>Services</h1>
        </div>
    )
}

export default Services;