import styled from "styled-components";

export const Fieldset = styled.fieldset`
    display: flex;
    align-items: center;
    height: 35px;
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
    
    div {
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

    &.gray {
        border: 6px solid #ECF0F5;

        div {
            background-color: #ECF0F5;
        }

        :hover {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`;