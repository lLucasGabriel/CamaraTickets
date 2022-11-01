import React from "react";
import Avatar from "../avatar";
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
                    <Avatar
                        key={index} 
                        username={partner.username}
                        office={partner.office}
                        img={partner.img}
                    />
                ))}
            </ul>
            <ul>
                <h2>MEMBROS</h2>
                {members.map((member, index) => (
                    <Avatar
                        key={index} 
                        username={member.username}
                        office={member.office}
                        img={member.img}
                    />
                ))}
            </ul>
        </S.Nav>
    ); 
}

export default Sidenav;