import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    form {
        background-color: ${props => props.theme.colors[600]};
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px 0px;
        height: 700px;
    }

    @media screen and (max-width: 1024px) {

    }
`;