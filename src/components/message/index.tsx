import React from "react";
import * as S from "./styles";

interface Props {
	color: string;
    value?: string;
    label: string;
}

const Message: React.FC<Props> = ({ color, value, label }) => {
	return(
		<S.Box className={color}>
			<p>{value} {label}</p>  
		</S.Box>
	);
};

export default Message;