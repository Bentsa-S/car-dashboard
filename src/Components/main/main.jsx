import React from "react";
import module from './header/Header.module.css';
import {Route, Routes} from "react-router-dom";
import Header from "./header/Header";
import MessagesPeople from "./MessagesSaction/Messages";
import CarSection from "./mainCarSection/Car.section";
import BookingSection from "./bookingSection/Booking.section";
import AssetsSection from "./assetsSektion/Assets.section";
import SellCarsSection from "./sellCarsSection/Sell.cars.section";

const Main = () => {
    return(
        <div className={module.width}>
            <Header/>
            <Routes>
                <Route path={'/car-dashboard'} element={<CarSection/>}/>
                <Route path={'/Assets'} element={<AssetsSection/>}/>
                <Route path={'/Messages'} element={<MessagesPeople/>}/>
                <Route path={'/Booking*'} element={<BookingSection/>}/>
                <Route path={'/SellCars'} element={<SellCarsSection/>}/>
            </Routes>

        </div>
    )
}

export default Main;