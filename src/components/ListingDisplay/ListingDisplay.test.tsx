import React from "react";
import renderer from "react-test-renderer";
import { ListingDisplay } from "./index";

describe("ListingDisplay", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<ListingDisplay />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

