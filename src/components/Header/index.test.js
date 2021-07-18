import React from "react";
import { render, screen } from "../../test/test-utils";
import Header from "./index";

describe("Header Component", () => {
    it("should render the header", () => {
        render(<Header />);

        const footer = screen.getByText(
            /Welcome to My Coupon Application/i
        );
        expect(footer).toBeInTheDocument();
    });
});