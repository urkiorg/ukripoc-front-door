import React, { FC } from "react";
import {
    NTA_LIGHT,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_QUERIES,
    SPACING
} from "@govuk-react/constants";
import { asTopNavAnchor } from "@govuk-react/top-nav";
import styled from "styled-components";

const LogoAnchor = asTopNavAnchor("a");

const Logo = styled.img`
    width: 122px;
    height: 32px;
    margin-top: 24px;
`;
const TopNavWrapper = styled("div")(({ color }) => ({
    display: "flex",
    justifyContent: "center",
    color,
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: FONT_SIZE.SIZE_14,
    lineHeight: LINE_HEIGHT.SIZE_14,
    [MEDIA_QUERIES.LARGESCREEN]: {
        fontSize: FONT_SIZE.SIZE_16,
        lineHeight: LINE_HEIGHT.SIZE_16
    }
}));
const TopNavInner = styled.div`
    display: flex;
    flex-direction: "column";
    width: calc(100% - ${SPACING.SCALE_5});
    max-width: "960px";
    padding: calc(${SPACING.SCALE_2} * 0.8) ${SPACING.SCALE_3};
    box-sizing: "border-box";
    ${MEDIA_QUERIES.LARGESCREEN} {
        padding: calc(${SPACING.SCALE_2} * 0.8) 0;
        flex-direction: "row";
        width: calc(100% - ${SPACING.SCALE_6});
    }
`;

const LogoSearchWrapper = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    [MEDIA_QUERIES.LARGESCREEN]: {
        display: "block",
        paddingRight: SPACING.SCALE_3,
        width: "33.33%"
    }
});

export const UkriHeader: FC = ({ ...props }) => (
    <React.Fragment>
        <TopNavWrapper>
            <TopNavInner>
                <LogoSearchWrapper>
                    <LogoAnchor href={"/"}>
                        <Logo
                            src={require("./logo.png")}
                            alt="UK Research and Innovation"
                        />
                    </LogoAnchor>
                </LogoSearchWrapper>
            </TopNavInner>
        </TopNavWrapper>
        {/* <BottomNavWrapper /> */}
    </React.Fragment>
);

export default UkriHeader;
