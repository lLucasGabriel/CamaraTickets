import React from "react";
import * as S from './styles'
import Sidenav from "../../components/sidenav";

const Profile: React.FC = () => {
    return (
        <>
            <S.Container>
                <S.Card>
                    <h3>LUCAS GABRIEL</h3>
                    <h4>ESTAGIÁRIO</h4>
                    <div>
                        <img src={'img/lucas.jpg'} alt="avatar"/>
                        <button>SOBRE</button>
                        <button>MINHA CONTA</button>
                    </div>
                </S.Card>
                <S.Activity>

                </S.Activity>
                <S.Team>

                </S.Team>
                <S.About>

                </S.About>
                <Sidenav />
            </S.Container>
        </>
    )
};

export default Profile;