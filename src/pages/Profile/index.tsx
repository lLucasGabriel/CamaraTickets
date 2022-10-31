import React, { useState } from "react";
import * as S from './styles'
import Sidenav from "../../components/sidenav";
import Status from "../../components/status";

const Profile: React.FC = () => {
    const team = [{
        img: 'img/user1.png',
        username: 'Shairon Hosokawa',
        office: 'Auxiliar Administrativo',
    }, {
        img: 'img/user2.png',
        username: 'Albert Camus',
        office: 'Auxiliar Administrativo',       
    }, {
        img: 'img/user3.png',
        username: 'Aldous Huxley',
        office: 'Auxiliar Administrativo',       
    }];
    const buttons = [{
        id: 1,
        modal: 'about',
        value: 'SOBRE'
    }, {
        id: 2,
        modal: 'account',
        value: 'MINHA CONTA'    
    }];
    const [modal, setModal] = useState('about');
    const [focus, setFocus] = useState(1)
    return (
        <>
            <S.Container>
                <S.Card>
                    <h3>LUCAS GABRIEL</h3>
                    <h4>ESTAGIÁRIO</h4>
                    <div>
                        <img src={'img/lucas.jpg'} alt="avatar"/>
                        {buttons.map((button) => (
                            <button 
                                key={button.id} 
                                onClick={(event: React.MouseEvent<HTMLElement>) => {
                                    setModal(button.modal); 
                                    setFocus(button.id)
                                }}
                                className={focus === button.id ? 'focused' : undefined}
                            >
                                {button.value}
                            </button>
                        ))}
                    </div>
                </S.Card>
                { modal === 'about' ? (
                    <>
                        <S.Activity>
                            <header><h3>ATIVIDADES</h3></header>
                            <Status color="green" value="22" label="TICKETS ABERTOS"/>                    
                            <Status color="red" value="22" label="TICKETS FECHADOS"/>
                            <Status color="white" value="22" label="TICKETS SOB RESPONSABILIDADE"/>
                        </S.Activity>
                        <S.Team>
                            <header><h3>EQUIPE</h3></header>
                            <ul>
                                {team.map((partner, index) => (
                                <li key={index}>
                                    <img src={partner.img} alt="avatar"/>
                                    <p>{partner.username}</p>
                                    <small>{partner.office}</small>
                                </li>
                                ))}
                            </ul>
                        </S.Team>
                        <S.About>
                            <header><h3>SOBRE MIM</h3></header>
                            <p>
                                Atendo dúvidas dos usuários sobre o manuseio do sistema corporativo e suas ferramentas de trabalho, sanando suas dúvidas e solucionando problemas dentro quanto fora do ambiente do sistema, me contate também quando o seu computador ou impressora apresentar algum defeito ou erro desconhecido.
                            </p>
                        </S.About>
                    </>
                ) : (
                    null
                )}
                <Sidenav />
            </S.Container>
        </>
    )
};

export default Profile;