import {combineReducers} from "redux";
import {BookingCardsReducer} from "./Booking.reducers";


const MainBookingReducers = combineReducers({
    cardsBooking: BookingCardsReducer
})

export default MainBookingReducers;