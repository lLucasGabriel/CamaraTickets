import styled from "styled-components";

export const Nav = styled.nav`
    z-index: 1;
    width: fit-content;
    height: calc(100vh - 70px);
    background: linear-gradient(90deg, ${props => props.theme.colors[200]} 0%, ${props => props.theme.colors[300]} 100%);
    
    ul {
        width: 327px;
    }

    ul.close {
        width: 70px;
        p {
            display: none;
        }
    }

    .menu {
        width: 40px;
        height: 40px;
        fill: ${props => props.theme.colors[500]};
        cursor: pointer;
    }

    li:first-child {
        padding: 15px 15px 0px 15px;    
    }

    li:not(:first-child) {
        display: flex;
        align-items: center;  
        margin: 25px 15px; 
        height: 40px;
        background: ${props => props.theme.colors[200]};
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px;   
    }

    li:not(:first-child):hover {
        background-color: ${props => props.theme.colors[500]};
    }

    .focused {
        background-color: ${props => props.theme.colors[500]};  
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    a {
        display: flex;
        align-items: center;
        gap: 25px;
        padding: 8px;
        width: 100%;
        color: #FFFFFF;
        font-weight: 200;
    }

    @media screen and (max-width: 1023px) {
        height: calc(100vh - 140px);
    }

    @media screen and (max-width: 720px) {
        height: calc(100vh - 210px);
        ul {
            width: 100vw;
        }
    }
`;