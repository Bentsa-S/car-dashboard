import React from "react";
import module from './header/Header.module.css';
import {Route, Routes} from "react-router-dom";
import Header from "./header/Header";
import MessagesPeople from "./MessagesSaction/Messages";
import CarSection from "./mainCarSection/Car.section";
import BookingSection from "./bookingSection/Booking.section";
import {PostsContainer} from "./bookingSection/post/Post.booking";
import MapBookingCards from "./bookingSection/post/Post.booking.container";

const Main = () => {
    return(
        <div className={module.width}>
            <Header/>
            <Routes>
                <Route path={'Main'} element={<CarSection/>}/>
                <Route path={'/Messages'} element={<MessagesPeople/>}/>
                <Route path={'/Booking*'} element={<MapBookingCards/>}/>
            </Routes>

        </div>
    )
}

export default Main;