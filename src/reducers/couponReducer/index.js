import actionTypes from "../../actions/action-types";

const initialState = {
    coupon_list: [],
    coupon_count: 0
}

const couponReducer = (state = initialState, action) => {
    const actionTypesPrefix = actionTypes.COUPON;
    switch (action.type) {
        case actionTypesPrefix.GET_COUPON_LIST:
            return Object.assign({}, state, { coupon_list: action.payload })
        case actionTypesPrefix.GET_COUPON_LIST_COUNT:
            return Object.assign({}, state, { coupon_count: action.payload })
        default:
            return state
    }
}

export default couponReducer