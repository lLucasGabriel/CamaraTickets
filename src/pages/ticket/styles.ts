import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${props => props.theme.colors[700]};

    .content {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 500px 1fr;
        grid-template-areas:
        "ticket chat"
        "responsibles chat";
        margin: 15px;
        gap: 15px;
    }

    h2 {
        color: white;
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
    background-color: ${props => props.theme.colors[300]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

export const Responsibles = styled.div`
    grid-area: responsibles;
    width: 339px;
    height: 270px;
    background-color: ${props => props.theme.colors[300]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    
    header {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.colors[700]}; 
    }
    
    ul {
        overflow-y: scroll;
        padding: 0px 15px;
        height: 200px;
    }

    h3 {
        color: white;
        font-weight: 200;
        letter-spacing: 0.375em;
        margin: 15px;
    }
`;

export const Chat = styled.section`
    grid-area: chat;
    background: #FFFFFF;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    header div{
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
        margin: 15px;
    }

    footer {
        display: flex;
    }

    button {
        background: none;
        width: 50px;
        height: 50px;
        //border: 2px solid;
        border-radius: 100px;
    }
`;

export const Type = styled.fieldset`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    height: 50px;
    background: #F4F7FB;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    padding-left: 15px;
    
    input {
        background: none;
        font-size: 0.97em;
    }
    
    button {
        background: none;
    }

    svg {
        width: 30px;
        height: 30px;
        fill: #767373;
    }
`;