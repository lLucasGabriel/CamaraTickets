import React from "react";
import * as S from "./styles";

interface Props {
    value: string,
    color?: string,
}

const Button: React.FC<Props> = ({ color, value}) => {
	return <S.Button className={color}> {value} </S.Button>;
};

export default Button;