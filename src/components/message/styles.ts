import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    gap: 15px;
    padding: 15px;
    .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        img {
            width: 60px;
            height: 60px;
            border-radius: 144px;
        }
        small {
            font-weight: 400;
            font-size: 0.8em;
            color: rgba(0, 0, 0, 0.7);
        }
    }

    .messageContent {
        background: #F4F7FB;
        border-radius: 0px 30px 30px 30px;
        padding: 15px;
        width: 600px;
        p {
            font-weight: 400;
            font-size: 0.96em;
            color: #6A6A6A;
        }
    }
`;