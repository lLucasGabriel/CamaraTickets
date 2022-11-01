import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

    form {
        background-color: ${props => props.theme.colors[600]};
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px 0px;
        height: 700px;
    }

    @media screen and (max-width: 1024px) {
        height: 100%;
        form {
            flex-direction: column;
            flex-wrap: nowrap;
            height: fit-content;
        }

        input, select, textarea {
            width: 300px;
        }
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px
    }
`;