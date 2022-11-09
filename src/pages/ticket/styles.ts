import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

    section {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr 3fr 2fr;
        grid-template-areas:
        "ticket info"
        "ticket chat"
        "responsibles chat";
        margin: 15px;
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
    background: linear-gradient(90deg, #433848 0%, #3F3544 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Responsibles = styled.div`
    grid-area: responsibles;
    width: 339px;
    background: #433848;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Info = styled.div`
    grid-area: info;
    display: flex;

    div {
        
    }
`;

export const Chat = styled.div`
    grid-area: chat;
    background: #FFFFFF;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;