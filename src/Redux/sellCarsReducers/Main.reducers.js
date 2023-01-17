import {combineReducers} from "redux";
import {ScheduleSellCarsReducers} from "./Schedule.redusers";
import {OfferDateSellCarsReducers} from "./Offer.details.reducers";
import {CarContainerSellCarsReducers} from "./Car.reducers";


const MainSellCarsReducers = combineReducers({
    schedule: ScheduleSellCarsReducers,
    offerDetails: OfferDateSellCarsReducers,
    car: CarContainerSellCarsReducers,
})

export default MainSellCarsReducers;