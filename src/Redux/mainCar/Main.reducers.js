import {combineReducers, createStore} from "redux";
import {carCartsReducer} from "./Car.carts.reduser";
import {statisticsCardsReducer} from "./Statistics.cards.reduser";


const MainCarReducers = combineReducers({
    car: carCartsReducer,
    statistics: statisticsCardsReducer
})

export default MainCarReducers;