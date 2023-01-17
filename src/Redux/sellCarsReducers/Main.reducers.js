import {combineReducers} from "redux";
import {ScheduleSellCarsReducers} from "./Schedule.redusers";
import {OfferDateSellCarsReducers} from "./Offer.details.reducers";


const MainSellCarsReducers = combineReducers({
    schedule: ScheduleSellCarsReducers,
    offerDetails: OfferDateSellCarsReducers,
})

export default MainSellCarsReducers;