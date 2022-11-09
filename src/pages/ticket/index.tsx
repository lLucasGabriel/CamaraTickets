import React from "react";
import * as S from "./styles";
import Title from "../../components/title";

const Ticket: React.FC = () => {
	return (
		<S.Container>
			<Title text="ACOMPANHAR ATENDIMENTO"/>
			<section>
				<S.Ticket>

				</S.Ticket>
				<S.Responsibles>

				</S.Responsibles>
				<S.Info>
					<div>ABERTO EM 10/04/2022</div>
					<div>ATIVIDADE RECENTE</div>
				</S.Info>
				<S.Chat>

				</S.Chat>
			</section>
		</S.Container>
	);
};

export default Ticket;