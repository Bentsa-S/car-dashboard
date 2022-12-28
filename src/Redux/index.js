import {combineReducers, createStore} from "redux";
import MainCarReducers from "./mainCar/Main.reducers";
import MainBookingReducers from "./bookingReducers/Main.reducers";


const rootReducers = combineReducers({
    meinCarSection: MainCarReducers,
    mainBookingSection: MainBookingReducers
})

export const store = createStore(rootReducers)