import styled from "styled-components";

export const Box = styled.li`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 25px 25px;
    grid-template-areas:
        "avatar p"
        "avatar small";
    padding: 15px 0px;
    column-gap: 15px;

    img {
        grid-area: avatar;
        width: 55px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 100px;
    }

    p {
        grid-area: p;
        font-weight: 300;
        font-size: 1em;
        margin-top: 5px;
    }
    
    small {
        grid-area: small;
        font-weight: 300;
        font-size: 0.8em;
        margin-top: 5px;
    }
    
    &.inherit {
        p {
            color: #FFFFFF;
        }
        small {
            color: #DADADA;
        }
    }

    &.dark {
        p {
            color: black;
        }
        small {
            color: black;
        }
    }
`;