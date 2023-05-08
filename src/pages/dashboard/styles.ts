import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${props => props.theme.colors[700]};

    h2 {
        color: white;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 15px;
        gap: 15px;
    }

    @media screen and (max-width: 1024px) {

    }

    @media screen and (max-width: 720px) {

    }
`;