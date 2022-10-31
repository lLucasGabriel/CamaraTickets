import React from "react";
import * as S from './styles';

interface Props {
    type: string,
    label: string,
    id: string,
    required: boolean,
    placeholder?: string,
    value?: string,
}

const Input: React.FC<Props> = ({ type, id, label, required, placeholder, value }) => {
    return(
        <S.Fieldset>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                required={required}
            >
            </input>
        </S.Fieldset>
    )
};

export default Input;