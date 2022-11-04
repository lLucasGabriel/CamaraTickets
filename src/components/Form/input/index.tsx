import React from "react";
import * as S from "./styles";

interface Props {
    type: string,
    label: string,
    id: string,
    required: boolean,
    width?: string,
    height?: string,
    margin?: string,
    color?: string,
    placeholder?: string,
    value?: string,
	defaultValue?: string,
}

const Input: React.FC<Props> = ({ type, id, label, required, placeholder, value, width, margin, height, color }) => {
	return(
		<S.Fieldset style={{margin: margin}}>
			<label 
				htmlFor={id}
				style={{color: color}}
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				placeholder={placeholder}
				value={value}
				required={required}
				style={{width: width, height: height}}
			>
			</input>
		</S.Fieldset>
	);
};

export default Input;