import styled from "styled-components";

export const Box = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    width: 348px;
    height: fit-content;
    background: ${props => props.theme.colors[300]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Label = styled.p`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 0.15em;

    .title {
    align-self: flex-start;
    font-weight: 600;
    font-size: 0.8em;
    line-height: 30px;
    letter-spacing: 0.7em;
    color: #F35309;
    }
`;

export const Container = styled.div`

`;

export const Status = styled.div`
    width: 324px;
    height: 64px;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5em;

    &.green {
        box-shadow: 0px 0px 8px rgba(0, 222, 163, 0.25);
        background: rgba(0, 222, 163, 0.2);
        border: 2px solid #00DEA3;
    }

    &.red {
        background: rgba(195, 33, 49, 0.2);
        box-shadow: 0px 0px 8px rgba(243, 83, 9, 0.25);
        border: 2px solid #C32131;
    }
`;