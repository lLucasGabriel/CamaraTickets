import styled from "styled-components";

export const Box = styled.div`
    overflow-y: scroll;
    position: fixed;
    top: 80px;
    right: 15px;
    width: 276px;
    height: 350px;
    padding: 10px 0px;
    border: 0.4px solid #ECF0F5;
    border-radius: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors[200]} 0%, ${props => props.theme.colors[400]} 100%);
    transition: background 1s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    svg {
        position: fixed;
        rotate: -90deg;
        width: 30px;
        height: 30px;
        top: 61px;
        right: 202px;
        fill: ${props => props.theme.colors[200]};
    }

    @media screen and (max-width: 1023px) {
        top: 151px;
        svg {
            top: 132px;
        }
    }

    @media screen and (max-width: 720px) {
        top: 221px;
        svg {
            top: 202px;
        }
    }
`;

export const Notification = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
        "avatar p"
        "avatar small";
    padding: 15px 0px;
    border-bottom: 1px solid #FFFFFF;

    img {
        grid-area: avatar;
        justify-self: center;
        width: 40px;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    p {
        grid-area: p;
        justify-self: center;
        align-self: center;
        text-align: left;
        font-size: 1em;

        strong {
            margin-right: 3px;
        }
    }

    small {
        grid-area: small;
        text-align: left;
        color: #DADADA;
    }
`;