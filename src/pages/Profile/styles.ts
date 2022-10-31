import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
        "card card sidenav"
        "activity about sidenav"
        "team about sidenav";
    gap: 5px;
    padding-left: 4px;
    background-image: url('img/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 70px);

    .sidenav {
        grid-area: sidenav;
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-areas:
        "card card"
        "activity about"
        "team about";

        .sidenav {
            display: none;
        }
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 1fr 1fr;
        grid-template-areas:
        "card"
        "about"
        "activity"
        "team";
    }
`;

export const Card = styled.section`
    grid-area: card;
    background-image: url('img/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px -194px 92px -3px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 5px;
    margin-top: 4px;
    width: 100%;
    height: 100%;

    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
        margin-left: 230px;
    }

    h4 {
        color: white;
        font-weight: 200;
        font-size: 0.9em;
        letter-spacing: 0.375em;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
        margin-left: 230px;
        margin-bottom: 10px;
    }

    div {
        position: relative;
        background-color: ${props => props.theme.colors[200]};
        display: flex;
        padding-left: 230px;
        height: 70px;
        border-radius: 2px;
    }

    img {
        position: absolute;
        left: 15px;
        top: -140px;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button {
        background: 0;
        padding: 0px 15px;
        font-weight: 400;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background: linear-gradient(180deg, ${props => props.theme.colors[400]} 0%, ${props => props.theme.colors[200]} 100%);
        border-bottom: 1px solid ${props => props.theme.colors[500]};
    }

    button.focused {
        background: linear-gradient(180deg, ${props => props.theme.colors[400]} 0%, ${props => props.theme.colors[200]} 100%);
        border-bottom: 1px solid ${props => props.theme.colors[500]}; 
    }
`;

export const Activity = styled.section`
    grid-area: activity;
    background-color: ${props => props.theme.colors[200]};
    margin: 2px;
    border-radius: 2px;

    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[300]}; 
    }

    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }
`;

export const Team = styled.section`
    grid-area: team;
    overflow-y: scroll;
    background-color: ${props => props.theme.colors[200]};
    border-radius: 2px;
    margin-bottom: 4px;
    
    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[300]}; 
    }
    
    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }
    
    ul {
        padding: 15px;
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
`;

export const About = styled.article`
    grid-area: about;
    background-color: ${props => props.theme.colors[200]};
    margin: 4px 0px;
    border-radius: 2px;

    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[300]}; 
    }

    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }

    p {
        color: white;
        padding: 15px;
        font-weight: 300;
    }
`;