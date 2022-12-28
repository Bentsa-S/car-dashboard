import React from "react";
import module from './menu.module.css'
import MenuLogo from "./menuLogo/Menu.logo";
import Dashboard from "./deshboerd/Deshboerd";
import Assets from "./assets/Assets";
import Booking from "./booking/Booking";
import SellCars from "./sellCars/Sell.cars";
import BayCars from "./bayCars/Bay.cars";
import Services from "./services/Services";
import Calender from "./calender/Calender";
import Messages from "./messeges/messeges";

const Menu = () => {
    return(
        <div className={module.backgroundMenu}>
            <div className={module.containerMenu}>
                <MenuLogo/>
                <Dashboard/>
                <Assets/>
                <Booking/>
                <SellCars/>
                <BayCars/>
                <Services/>
                <Calender/>
                <Messages/>
            </div>

        </div>
    )
}

export default Menu;

