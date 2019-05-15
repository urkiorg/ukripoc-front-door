import React from "react";
import { storiesOf } from "@storybook/react";
import { OpportunityIndex } from "./index";

storiesOf("Components|OpportunityIndex", module).add("Default", () => (
    <OpportunityIndex opportunities={[]} />
));
