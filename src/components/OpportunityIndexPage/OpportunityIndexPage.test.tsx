import React from "react";
import renderer from "react-test-renderer";
import { OpportunityIndexPage } from "./index";

describe("OpportunityIndexPage", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<OpportunityIndexPage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

