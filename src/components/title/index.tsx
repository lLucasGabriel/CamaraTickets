import React from "react";
import * as S from './styles'

interface Props {
    text: string
}

const NewMember: React.FC<Props> = ({ text }) => {
    return <S.Title>{text}</S.Title>
};

export default NewMember;