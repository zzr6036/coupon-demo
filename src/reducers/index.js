import { combineReducers } from "redux";
import couponReducer from "./couponReducer";

const rootReducers = combineReducers({
    coupon: couponReducer
})

export default rootReducers;