import React from "react";
import * as S from './styles';

interface Props {
    label: string,
    id: string,
    required: boolean,
    placeholder?: string,
}

const Textarea: React.FC<Props> = ({ id, label, required, placeholder}) => {
    return(
        <S.Fieldset>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                required={required}
            >
            </textarea>
        </S.Fieldset>
    )
};

export default Textarea;