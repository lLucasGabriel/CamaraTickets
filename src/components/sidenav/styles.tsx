import styled from "styled-components";

export const Nav = styled.nav`
    z-index: 1;
    overflow-y: scroll;
    width: 450px;
    height: calc(100vh - 70px);
    background: linear-gradient(90deg, ${props => props.theme.colors[200]} 0%, ${props => props.theme.colors[300]} 100%);
    
    ul {
        padding: 15px;
    }
    
    ul:first-child{
        border-bottom: 1px solid ${props => props.theme.colors[200]};
    }

    h2 {
        color: #DADADA;
        font-weight: 300;
    }
    
    li {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas:
            "avatar p"
            "avatar small";
        padding: 15px 0px;
    }
    
    img {
        grid-area: avatar;
        width: 55px;
    }

    p {
        grid-area: p;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 1em;
    }

    small {
        grid-area: small;
        color: #DADADA;
        font-weight: 300;
        font-size: 0.8em;
    }
    
    @media screen and (max-width: 1523px) {
        display: none;
        height: calc(100vh - 140px);
    }
`;