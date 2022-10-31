import React from "react";
import * as S from "./styles"

const Sidenav: React.FC = () => {
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
    },];

    const members = [{
        img: 'img/user4.png',
        username: 'Sophie Turner',
        office: 'Auxiliar Legislativo',       
    }, {
        img: 'img/user5.png',
        username: 'Max Horkheimer',
        office: 'Auxiliar Legislativo',      
    }, {
        img: 'img/user6.png',
        username: 'Theodore Adorno',
        office: 'Auxiliar Legislativo',    
    }, {
        img: 'img/user7.png',
        username: 'Liev Davidovitch',
        office: 'Auxiliar Legislativo',
    }, {
        img: 'img/user4.png',
        username: 'Sophie Turner',
        office: 'Auxiliar Legislativo',       
    }, {
        img: 'img/user5.png',
        username: 'Max Horkheimer',
        office: 'Auxiliar Legislativo',      
    }, {
        img: 'img/user6.png',
        username: 'Theodore Adorno',
        office: 'Auxiliar Legislativo',    
    }, {
        img: 'img/user7.png',
        username: 'Liev Davidovitch',
        office: 'Auxiliar Legislativo',
    }];
    return(
        <S.Nav className="sidenav">
            <ul>
                <h2>EQUIPE</h2>
                {team.map((partner, index) => (
                    <li key={index}>
                        <img src={partner.img} alt="avatar"/>
                        <p>{partner.username}</p>
                        <small>{partner.office}</small>
                    </li>
                ))}
            </ul>
            <ul>
                <h2>MEMBROS</h2>
                    {members.map((member, index) => (
                    <li key={index}>
                        <img src={member.img} alt="avatar"/>
                        <p>{member.username}</p>
                        <small>{member.office}</small>
                    </li>
                ))}
            </ul>
        </S.Nav>
    ); 
}

export default Sidenav;