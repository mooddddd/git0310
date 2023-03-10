import styled from "styled-components";

export const Wrap = styled.div`
    width: 80%;
    min-height: 10rem;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const From = styled.form`
    margin: 2rem;
`;

export const InputBox = styled.input`
    display: block;
    margin-bottom: 0.2rem;
    padding: 0.1rem 0.2rem;
`;

export const Btn = styled.button`
    margin-top: 0.2rem;
    padding: 0.2rem;
    border: none;

    &:hover {
        background: #c1c1c1;
    }
`;
