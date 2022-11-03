import React from "react";
import * as S from "./styles";

interface Props {
	key: number;
    value?: string;
    label: string;
}

const Status: React.FC<Props> = ({ key, value, label }) => {
	function setStatus(index: number) {
		const status = [{
			0: 'red',
			1: 'green',
			2: 'orange',
		}];
		return status[index];
	}
	return(
		<S.Box className={toString(setStatus(key))}>
			<p>{value} {label}</p>  
		</S.Box>
	);
};

export default Status;