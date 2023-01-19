import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr 1fr ;
    grid-template-rows: 70px 350px 225px 1fr;
    grid-template-areas:
        "title title tile"
        "card card card"
        "activity modal modal"
        "team modal modal";
    background-color: ${props => props.theme.colors[700]};
    width: 100%;
    gap: 18px;
    padding: 0px 40px 10px 40px;
    height: calc(100% - 70px);
    margin-right: 300px;

    h2 {
        grid-area: "title";
        color: white;
    }

    @media screen and (max-height: 900px) {
        form {
            flex-wrap: nowrap;
            overflow-y: scroll;
        }
    }

    @media screen and (max-width: 1724px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 1024px) {
        padding-right: 15px;
        grid-template-columns: 350px 1fr;
        grid-template-rows: 70px 350px 1fr 1fr;
        grid-template-areas:
        "title"
        "card"
        "activity modal"
        "team modal";
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 70px 350px 1fr 225px 100%;
        padding: 10px;
        grid-template-areas:
        "title"
        "card"
        "modal"
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
    border-radius: 8px;
    width: 100%;
    height: 350px;

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

    .container {
        position: relative;
        background-color: ${props => props.theme.colors[300]};
        display: flex;
        padding-left: 355px;
        height: 70px;
        border-radius: 0px 0px 8px 8px;
    }

    .avatar {
        position: absolute;
        background-image: url("img/lucas.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        left: 80px;
        top: -140px;
        width: 200px;
        height: 200px;
        border-radius: 100px;
    }

    button {
        background: 0;
        padding: 0px 15px;
        font-weight: 400;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background: linear-gradient(180deg, rgba(149, 126, 144, 0) 6.77%, ${props => props.theme.colors[400]} 100%);
    }

    button.focused {
        background: linear-gradient(180deg, rgba(149, 126, 144, 0) 6.77%, ${props => props.theme.colors[400]} 100%);
    }

    @media screen and (max-width: 720px) {
        .avatar {
            left: 30px;
            width: 200px;
            height: 200px;
            border-radius: 200px;
        }
        h3 {
            margin-left: 260px;
        }

        h4 {
            margin-left: 260px;
        }    
    }
`;

export const Activity = styled.section`
    grid-area: activity;
    background-color: ${props => props.theme.colors[300]};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[700]}; 
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
    background-color: ${props => props.theme.colors[300]};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 310px;
    
    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[700]}; 
    }
    
    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }
    
    ul {
        overflow-y: scroll;
        padding: 15px;
        height: 250px;
    }
`;

export const About = styled.article`
    grid-area: modal;
    height: fit-content;
    background-color: ${props => props.theme.colors[300]};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[700]}; 
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
        font-weight: 200;
        letter-spacing: 0.18em;
        line-height: 142.52%;
        border-bottom: 1px solid ${props => props.theme.colors[700]}; 
    }
`;

export const Account = styled.section`
    grid-area: modal;
    height: fit-content;
    background-color: ${props => props.theme.colors[300]};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[700]}; 
    }

    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px;
        border-radius: 8px;
    }
    button {
        margin-top: 15px;
        margin-left: 5px;
    }
`;