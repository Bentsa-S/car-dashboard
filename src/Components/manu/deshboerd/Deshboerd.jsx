import React from "react";
import module from '../menu.module.css'
import logo from '../../../icone/iconeMenu/deshboard.png'
import {NavLink} from "react-router-dom";

const Dashboard = () =>{
    return(
        <NavLink to='/Main' className={module.flex}>
            <img className={module.icons} src={logo}/>
            <h1 className={module.text}>Dashboard</h1>
        </NavLink>
    )
}
export default Dashboard;