import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/messages.png'
import {NavLink} from "react-router-dom";

const Messages = () => {
    return(
        <NavLink to='/Messages' className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>Messages</h1>
        </NavLink>
    )
}

export default Messages;