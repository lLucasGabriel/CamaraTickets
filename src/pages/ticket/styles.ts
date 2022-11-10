import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

    .content {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 35px 3fr 2fr;
        grid-template-areas:
        "ticket info"
        "ticket chat"
        "responsibles chat";
        margin: 15px;
        gap: 15px;
    }

    @media screen and (max-width: 1024px) {
        height: 100%;
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px
    }
`;

export const Ticket = styled.div`
    grid-area: ticket;
    width: 339px;
    height: 500px;
    background: linear-gradient(90deg,${props => props.theme.colors[300]} 0%, ${props => props.theme.colors[200]} 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Responsibles = styled.div`
    grid-area: responsibles;
    width: 339px;
    max-height: 300px;
    overflow-y: scroll;
    background: linear-gradient(90deg,${props => props.theme.colors[300]} 0%, ${props => props.theme.colors[200]} 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;

    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[300]}; 
    }

    ul {
        padding: 0px 15px;
    }

    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }
`;

export const Info = styled.div`
    grid-area: info;
    display: flex;
    justify-content: end;
    gap: 15px;

    div {
        width: fit-content;
        display: flex;
        align-items: center;
        font-weight: 300;
        font-size: 0.9em;
        padding: 10px 20px;
        height: 27px;
        background: linear-gradient(90deg, #433848 0%, #3F3544 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;   
        color: white;
    }
`;

export const Chat = styled.div`
    grid-area: chat;
    background: #FFFFFF;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;