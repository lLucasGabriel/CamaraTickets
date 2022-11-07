import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    gap: 10px;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);

    select {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        padding: 5px; 
        border-radius: 2px;
        font-size: 1em;
    }

    option {
        border-radius: 0;
    }

    .pagination {
        margin-left: auto;
    }

    button {
        background: none;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        padding: 5px;
        border-radius: 2px;
        cursor: pointer;
    }
`;