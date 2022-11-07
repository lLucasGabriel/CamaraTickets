import styled from "styled-components";

export const Fieldset = styled.fieldset`
    position: relative;
    display: flex;
    align-items: center;
    height: 35px;
    width: 400px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 6px solid ${props => props.theme.colors[500]};
    border-radius: 25px;
    background-color: white;

    :hover {
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
    }

    input {
        background: 0;
        padding-left: 10px;
        padding-right: 25px;
        width: 100%;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        width: 24px;
        height: 24px;
        border-radius: 25px;
    }
    
    label div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.colors[500]};
        border: 1.7px solid #FFFFFF;
        border-radius: 25px;
    }

    svg {
        fill: ${props => props.theme.colors[100]};
    }
`;

export const Modal = styled.div`
    position: fixed;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    top: 60px;
    max-height: 660px;
    width: 380px;
    border: 0.4px solid #ECF0F5;
    border-radius: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors[200]} 0%, ${props => props.theme.colors[400]} 100%);
    transition: background 1s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #FFFFFF;
        width: 100%;
        cursor: pointer;
    }

    .item:last-child {
        border-bottom: 0;
    }

    .item:hover {
        background-color: ${props => props.theme.colors[500]};
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .item:hover p, .item:hover span, .item:hover small, .item:hover svg {
        color: ${props => props.theme.colors[100]};
        fill: ${props => props.theme.colors[100]};
    }

    .content {
        margin: 15px 0px;
    }


    .title {
        font-weight: 500;
    }
    
    svg {
        fill: #FFFFFF;
        height: 40px;
        width: 40px;
        margin: 15px;
    }

    p, span {
        color: #FFFFFF;
        font-weight: 200;
    }

    span {
        font-weight: 500;
    }

    span:nth-child(2) {
        margin-left: 5px;
    }

    small {
        color: #DADADA;
    }
`;