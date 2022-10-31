import styled from "styled-components";

export const Header = styled.header`
    z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, ${props => props.theme.colors[200]} 0%, ${props => props.theme.colors[400]} 78.65%, ${props => props.theme.colors[200]} 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1023px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;
        height: 140px;

        fieldset {
            position: fixed;
            top: 88px;
            left: 15px;
        }
    }

    @media screen and (max-width: 720px) {
        height: 210px;

        fieldset {
            width: calc(100vw - 50px);
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 345px;
    height: 70px;
    text-align: center;
    border-right: 1px solid #3F3544;
    margin-right: 15px;
    
    h1 {
        color: white;
        font-weight: lighter;    
        font-size: 1.5em;
        margin-left: 15px;  
    }

    @media screen and (max-width: 1023px) {
        width: 100%;
        border: 0;

        h1 {
            margin-left: auto;
            margin-right: 15px;
        }
    }
`;

export const CoatOfArms = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border: 1px solid #3F3544;
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px; 
        border: 2px solid #FFFFFF;
        background-color: #CCB8C1;
        border-radius: 50px;        
    }

    img {
        width: 40px;
        height: 40px;  
    }
`;

export const Tools = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;  

    @media screen and (max-width: 1023px) {
        margin-bottom: 15px;      
    }
`;

export const Button = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 40px;
    padding: 0px 7px;
    margin-right: 15px;
    border: 1px solid #FFFFFF;
    background: 0;
    color: white;
    border-radius: 2px;
    cursor: pointer;

    svg {
        fill: white;
    }

    img {
        width: 30px;
        border-radius: 15px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 5px;
        color: white;
    }

    &:hover {
        background-color: ${props => props.theme.colors[500]};
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;