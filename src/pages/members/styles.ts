import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    
    header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    section {
        background-color: white;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        width: 100%;
        height: fit-content;
    }

    @media screen and (max-width: 1024px) {
        height: 100%;
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px;
    }
`;