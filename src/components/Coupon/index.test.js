import React from "react"
import Coupon from "./index"
import { shallow } from '../../enzyme'
import { Provider } from "react-redux"
import configureStore from 'redux-mock-store'

const mockDatas = [{
    comment: "Test vouchers for POS",
    couponCode: "NPK9KCN3I1Y0RLC",
    couponType: "ORDER",
    discount: 20,
    discountType: "DIRECT_DISCOUNT",
    expiryDate: "2020-12-31",
    id: 15195,
    maxDiscountAmount: null,
    maxRedemption: 1,
    maxSingleRedemption: 1,
    minOrderAmount: 1,
    slug: null,
    startDate: "2020-07-08",
    status: "ENABLED",
    type: "CASH",
    validOnDays: { FRI: "1", MON: "1", SAT: "1", SUN: "1", THU: "1", TUE: "1", WED: "1" },
    validOnPayment: "ALL",
    validOnSlots: null,
    validOnStores: null,
    validOnUser: "ALL",
}]

const initStore = []

const dispatchMock = jest.fn()

const mockStore = configureStore()

describe("Coupon Component", () => {
    it('renders coupon list', () => {
        const wrapper = shallow(
            <Provider store={mockStore(initStore)}>
                <Coupon
                    coupon_list={mockDatas}
                    dispatch={dispatchMock}
                />
            </Provider>

        )
        expect(wrapper).toMatchSnapshot()
    })
})