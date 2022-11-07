import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-bottom: 800px;
    
    header {
        background-color: white;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    section {
        width: 100%;
    }

    .emptyTable {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        padding: 50px 0px;
        width: 100%;
        background-color: #ECF0F5;
    }

    .emptyTable p {
        color: #677FAC;
    }

    .emptyMessage {
        font-size: 1.2em;
        margin-top: 20px;
    }

    @media screen and (max-width: 1524px) {
        height: fit-content;

        section {
            width: 1500px;
        }
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px;
    }
`;