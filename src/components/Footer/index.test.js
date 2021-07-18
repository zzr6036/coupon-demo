import React from "react";
import { render, screen } from "../../test/test-utils";
import Footer from "./index";

describe("Footer Component", () => {
    it("should render the footer", () => {
        render(<Footer />);

        const footer = screen.getByText(
            /Coupon Application ©2021 Created by ZR/i
        );
        expect(footer).toBeInTheDocument();
    });
});