import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr 1fr ;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
        "card card card"
        "activity modal modal"
        "team modal modal";
    background-color: ${props => props.theme.colors[300]};
    width: 100%;
    gap: 5px;
    padding: 5px 5px 5px 0px;
    height: calc(100vh - 70px);

    form {
        grid-area: modal;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px;
        border-radius: 8px;
        background-color: ${props => props.theme.colors[200]};
    }
    @media screen and (max-height: 900px) {
        form {
            flex-wrap: nowrap;
            overflow-y: scroll;
        }
    }

    @media screen and (max-width: 1724px) {
        form {
            flex-wrap: nowrap;
            overflow-y: scroll;
        }
    }

    @media screen and (max-width: 1024px) {
        padding-right: 15px;
        grid-template-columns: 350px 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-areas:
        "card"
        "activity modal"
        "team modal";
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px;
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
    border-radius: 8px;
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
        border-radius: 0px 0px 8px 8px;
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
    border-radius: 8px;

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
    border-radius: 8px;
    
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

    @media screen and (max-width: 720px) {
        overflow-y: visible;
    }
`;

export const About = styled.article`
    grid-area: modal;
    background-color: ${props => props.theme.colors[200]};
    border-radius: 8px;

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