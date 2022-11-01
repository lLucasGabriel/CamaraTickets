import React from "react";
import * as S from './styles'
import Title from "../../components/title";
import Input from "../../components/form/input";
import Select from "../../components/form/select";

const NewMember: React.FC = () => {
    const sectors = [{
        value: 'divsist',
        text: 'DIVISÃO DE SISTEMAS DE INFORMAÇÃO',
    },{
        value: 'divinfra',
        text: 'DIVISÃO DE INFRAESTRUTURA E TELEFONIA',
    }];
    const origins = [{
        value: 'camara',
        text: 'CÂMARA MUNICIPAL DE SANTOS',
    },{
        value: 'prefeitura',
        text: 'PREFEITURA DE SANTOS',
    }];
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
                <Select
                    label="SETOR"
                    id="sector"
                    required={true}
                >
                    {sectors.map((sector, index) => (
                        <option key={index} value={sector.value}>
                            {sector.text}
                        </option>
                    ))}
                </Select>
                <Select
                    label="ORIGEM"
                    id="origin"
                    required={true}
                >
                    {origins.map((origin, index) => (
                        <option key={index} value={origin.value}>
                            {origin.text}
                        </option>
                    ))}
                </Select>
           </form>
        </S.Container>
    )
};

export default NewMember;