import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        list-style: none;
        text-decoration: none;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    main {
        display: flex;
        height: 100%;
        margin-top: 70px;

        @media screen and (max-width: 1023px) {
            margin-top: 140px;
        }

        @media screen and (max-width: 720px) {
            margin-top: 210px;
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors[500]};
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors[300]};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors[600]};
    } 
`;