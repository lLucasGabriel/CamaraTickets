import React from "react";
import * as S from './styles'
import Title from "../../components/title";
import Input from "../../components/Form/input";

const NewTicket: React.FC = () => {
    return (
        <S.Container>
           <Title text="NOVO TICKET"/>
           <form>
                <Input 
                    type="text"
                    label="SOLICITANTE"
                    id="requester"
                    required={true}
                />
                <Input 
                    type="text"
                    label="CATEGORIA"
                    id="category"
                    required={true}
                />
           </form>
        </S.Container>
    )
};

export default NewTicket;