import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 50px;
    padding: 10px;
    font-weight: 400;
    font-size: 0.9em;
    letter-spacing: 0.09em;
    margin: 15px;
    text-align: center;

    &.green {
        color: white;
        background-color: #84C7AE;
        border: 1px solid #84C7AE;
    }

    &.red {
        color: #FC5C66;
        background-color: none;
        border: 1px solid #FC5C66;
    }

    &.white {
        color: ${props => props.theme.colors[500]};
        background-color: none;
        border: 1px solid ${props => props.theme.colors[500]};
    }
`;