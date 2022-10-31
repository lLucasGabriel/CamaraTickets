import React from "react";
import * as S from './styles'
import Title from "../../components/title";
import Input from "../../components/Form/input";

const NewMember: React.FC = () => {
    return (
        <S.Container>
           <Title text="NOVO MEMBRO"/>
           <form>
                <Input 
                    type="text"
                    label="NOME COMPLETO"
                    id="name"
                    required={true}
                />
                <Input 
                    type="text"
                    label="USUÁRIO"
                    id="username"
                    required={true}
                />
                <Input 
                    type="password"
                    label="SENHA"
                    id="password"
                    required={true}
                />
                <Input 
                    type="date"
                    label="NASCIMENTO"
                    id="birthday"
                    required={true}
                />
                <Input 
                    type="text"
                    label="CPF"
                    id="cpf"
                    required={true}
                />
                <Input 
                    type="text"
                    label="REGISTRO CMS"
                    id="register"
                    required={true}
                />
                <Input 
                    type="email"
                    label="EMAIL ALTERNATIVO"
                    id="email"
                    required={false}
                />
           </form>
        </S.Container>
    )
};

export default NewMember;