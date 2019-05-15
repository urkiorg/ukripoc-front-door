import React from "react";
import renderer from "react-test-renderer";
import { OpportunityListItem } from "./index";

describe("OpportunityListItem", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<OpportunityListItem />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

