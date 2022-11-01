import React from "react";
import * as S from './styles';

interface Props {
    username: string,
    office: string,
    img: string,
}

const Avatar: React.FC<Props> = ({ username, office, img }) => {
    return(
        <S.Box>
            <img src={img} alt="avatar"/>
            <p>{username}</p>
            <small>{office}</small>
        </S.Box>
    )
};

export default Avatar;