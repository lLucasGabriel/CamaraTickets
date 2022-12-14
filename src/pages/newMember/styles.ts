import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

    form {
        position: relative;
        background-color: ${props => props.theme.colors[600]};
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px 0px 70px 0px;
        height: 620px;
    }

    button {
        position: absolute;
        left: 15px;
        bottom: 15px;
    }

    @media screen and (max-width: 1024px) {
        height: 100%;
        form {
            flex-direction: column;
            flex-wrap: nowrap;
            height: fit-content;
        }

        input, select {
            width: 300px;
        }
    }

    @media screen and (max-width: 720px) {
        margin-left: 70px
    }
`;