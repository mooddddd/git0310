import styled, { css } from "styled-components";

const font = css`
    font-family: "IBMPlexSansKR-Regular";
`;

export const Nav = styled.div`
    ul {
        display: flex;
    }
    li {
        margin-left: 1rem;
    }
    a {
        ${font}
        color: #ececec;
        padding: 0.5rem;

        &:hover {
            font-weight: bold;
        }
    }
`;

// export const Atag = styled.a`
//     ${font}
//     color: #ececec;
//     padding: 5px;

//     &:hover {
//         font-weight: bold;
//     }
// `;

// a {
//     color: #ececec;
//     padding: 5px;

//     &:hover {
//         font-weight: bold;
//     }
// }
