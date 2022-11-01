import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
        "card card card sidenav"
        "activity modal modal sidenav"
        "team modal modal sidenav";
    gap: 5px;
    padding-left: 4px;
    background-color: ${props => props.theme.colors[300]};
    width: 100%;
    height: calc(100vh - 70px);

    .sidenav {
        grid-area: sidenav;
    }

    form {
        grid-area: modal;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px;
        border-radius: 5px;
        background-color: ${props => props.theme.colors[200]};
    }

    @media screen and (max-width: 1550px) {
        form {
            flex-wrap: nowrap;
            overflow-y: scroll;
        }
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 350px 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-areas:
        "card"
        "activity modal"
        "team modal";

        .sidenav {
            display: none;
        }
    }

    @media screen and (max-width: 720px) {
        overflow-x: hidden;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 300px 1fr 300px 0.5fr;
        grid-template-areas:
        "card"
        "modal"
        "activity"
        "team";

        form {
            overflow-y: visible;
        }
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
        margin-left: 355px;
    }

    h4 {
        color: white;
        font-weight: 200;
        font-size: 0.9em;
        letter-spacing: 0.375em;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
        margin-left: 355px;
        margin-bottom: 10px;
    }

    div {
        position: relative;
        background-color: ${props => props.theme.colors[200]};
        display: flex;
        padding-left: 355px;
        height: 70px;
        border-radius: 2px;
    }

    img {
        position: absolute;
        left: 80px;
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

    @media screen and (max-width: 720px) {
        img {
            left: 30px;
        }
        h3 {
            margin-left: 260px;
        }

        h4 {
            margin-left: 260px;
        }    
    
        div {
            padding-left: 260px;
        }
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

    @media screen and (max-width: 720px) {
        overflow-y: visible;
    }
`;

export const About = styled.article`
    grid-area: modal;
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