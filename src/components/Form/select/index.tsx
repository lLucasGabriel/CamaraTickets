import React from "react";
import * as S from './styles';

interface Props {
    label: string,
    id: string,
    width?: string,
    height?: string,
    margin?: string,
    color?: string,
    required: boolean,
    children: JSX.Element[] | JSX.Element
}

const Select: React.FC<Props> = ({ id, label, width, height, margin, color, required, children }) => {
    return(
        <S.Fieldset style={{margin: margin}}>
            <label 
                htmlFor={id}
                style={{color: color}}
            >
                {label}
            </label>
            <select
                id={id}
                name={id}
                style={{width: width, height: height}}
                required={required}
            >
                {children}
            </select>
        </S.Fieldset>
    )
};

export default Select;