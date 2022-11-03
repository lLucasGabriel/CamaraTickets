import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        border: 2px solid #ECF0F5;
        padding: 10px;
        border-collapse: collapse;
        font-weight: 600;
        color: #313131;
    }

    thead svg {
        color: #313131;
    }
    
    th div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    gap: 10px;

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