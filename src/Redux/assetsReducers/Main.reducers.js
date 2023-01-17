import {combineReducers} from "redux";
import {ScheduleAssetsReducer} from "./Schedule.reducer";


export const MainAssetsReducers = combineReducers({
    schedule: ScheduleAssetsReducer
})
