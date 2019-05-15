import React from "react";
import renderer from "react-test-renderer";
import { OpportunityIndex } from "./index";

describe("OpportunityIndex", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<OpportunityIndex opportunities={[]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
