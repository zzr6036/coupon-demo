import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import couponReducer from './reducers/couponReducer'

const rootReducers = combineReducers({
    coupon: couponReducer
});


export function initializeStore() {
    return createStore(
        rootReducers,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}