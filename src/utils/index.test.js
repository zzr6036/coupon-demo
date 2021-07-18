import React from "react"
import { paginate } from "./paginate-util"

describe("Coupon Component pagination function", () => {
    it("do pagination function", () => {
        const posts = ["1", "2", "3", "4", "5"]
        const expectedRes1 = ["1", "2"]

        expect(paginate(posts, 0, 2)).toEqual(expectedRes1);

    })
})
