import {combineReducers, createStore} from "redux";
import MainCarReducers from "./mainCar/Main.reducers";
import MainBookingReducers from "./bookingReducers/Main.reducers";
import {MainAssetsReducers} from "./assetsReducers/Main.reducers";
import MainSellCarsReducers from "./sellCarsReducers/Main.reducers";


const rootReducers = combineReducers({
    meinCarSection: MainCarReducers,
    mainBookingSection: MainBookingReducers,
    mainAssetsSection: MainAssetsReducers,
    mainSellCarsSection: MainSellCarsReducers
})

export const store = createStore(rootReducers)