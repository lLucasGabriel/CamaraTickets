import styled from "styled-components";

export const Box = styled.li`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 30px 25px;
    grid-template-areas:
        "avatar p"
        "avatar small";
    padding: 15px 0px;
    
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
`;