import styled, { css } from "styled-components";

const font = css`
    @font-face {
        font-family: "ARCHISCULPTURE_v200";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2303@1.0/ARCHISCULPTURE_v200.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "IBMPlexSansKR-Regular";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }
`;

export const HeaderWrap = styled.div`
    ${font}
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    color: #ececec;
`;
