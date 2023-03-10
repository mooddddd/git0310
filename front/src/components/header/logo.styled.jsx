import styled, { css } from "styled-components";

const logoFont = css`
    font-family: "ARCHISCULPTURE_v200";
    font-size: 2rem;
`;

export const Logo = styled.h1`
    a {
        color: #ececec;
        font-size: bold;
        ${logoFont}
    }
`;
