import styled from "styled-components";

export const Button = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 8px 15px;
    background: #84C7AE;
    border-bottom: 2px solid #567569;
    border-radius: 2px;
    font-weight: 300;
    font-size: 0.8em;
    color: #FFFFFF;
    cursor: pointer;
    
    &.blue {
        background: #338DD1;
        border-bottom: 2px solid #266595;
    }

    &.red {
        background: #FC5C66;
        border-bottom: 2px solid #C1434B;
    }
`;