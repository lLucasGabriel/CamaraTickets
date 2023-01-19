import styled from "styled-components";

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px;

    label {
        color: #6A6A6A;
        letter-spacing: 0.22em;
        font-size: 0.9em;
    }

    select {
        width: 510px;
        height: 48px;
        background: #FFFFFF;
        padding: 10px;
        border-radius: 2px;
        box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
        color: #767373;
    }

    select option {
        height: 48px;
        background: #FFFFFF;
        padding: 10px;
        border-radius: 2px;
        box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
        color: #767373;
    }

    &.dark {
        label {
            color: white;
        }
        select {
            background-color: ${props => props.theme.colors[700]};
            color: white;
        }
    }
`;