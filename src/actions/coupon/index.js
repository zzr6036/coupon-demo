import actionTypes from "../action-types";
import axios from "axios";
import { notification } from "antd";
// import { couponService } from "../../service/coupon-service";

export const getCouponList = () => async dispatch => {
    try {
        await axios.get('./data.json').then(res => {
            if (res && res.data && res.data.code === 200) {
                dispatch({
                    type: actionTypes.COUPON.GET_COUPON_LIST,
                    payload: res.data.data.coupon
                })
                dispatch({
                    type: actionTypes.COUPON.GET_COUPON_LIST_COUNT,
                    payload: res.data.data.count
                })
                return true
            } else {
                return notification.error({
                    message: 'Fail',
                    description: 'Error with API',
                    duration: 3,
                })
            }
        })
    } catch (error) {
        console.log('error===>', error)
        return notification.error({
            message: 'Fail',
            description: 'Error!'
        })
    }
}