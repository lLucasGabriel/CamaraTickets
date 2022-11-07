import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        border: 2px solid #ECF0F5;
        padding: 10px;
        border-collapse: collapse;
        background-color: #F4F7FB;
        font-weight: 600;
        color: #313131;
    }

    tr:nth-child(even) {
      background-color: #F4F7FB;
    }

    tr:hover {
        background-color: #B4DEFA;
    }
    
    tr:hover td {
        border: 0;
        border: 2px solid #B4DEFA;
    }
    
    tr {
        cursor: pointer;
    }

    td {
        font-size: 0.9em;
        border: 2px solid #ECF0F5;
        border-collapse: collapse;
        padding: 0px 10px;
    }

    td:first-child {
        width: 70px;
    }

    td:first-child input, td:first-child p {
        margin-left: 15px;
    }

    td:last-child button:first-child{
      margin-right: 10px;
    }

    thead svg {
        color: #313131;
    }
    
    th div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .local {
        display: flex;
        flex-direction: column;
    }

    .local span:last-child {
        font-weight: 300;
    }
`;