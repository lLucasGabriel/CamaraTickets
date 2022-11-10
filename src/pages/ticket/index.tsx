import React from "react";
import * as S from "./styles";
import Title from "../../components/title";
import Avatar from "../../components/avatar";

const Ticket: React.FC = () => {
	const team = [{
		img: "img/user1.png",
		username: "Shairon Hosokawa",
		office: "Auxiliar Administrativo",
	}, {
		img: "img/user2.png",
		username: "Albert Camus",
		office: "Auxiliar Administrativo",       
	}, {
		img: "img/user3.png",
		username: "Aldous Huxley",
		office: "Auxiliar Administrativo",       
	}, {
		img: "img/user1.png",
		username: "Shairon Hosokawa",
		office: "Auxiliar Administrativo",
	}, {
		img: "img/user2.png",
		username: "Albert Camus",
		office: "Auxiliar Administrativo",       
	}, {
		img: "img/user3.png",
		username: "Aldous Huxley",
		office: "Auxiliar Administrativo",       
	}];
	return (
		<S.Container>
			<Title text="ACOMPANHAR ATENDIMENTO"/>
			<div className="content">
				<S.Ticket>

				</S.Ticket>
				<S.Responsibles>
					<header><h3>RESPONSÁVEIS</h3></header>
					{team.map((partner, index) => (
						<ul key={index}>
							<Avatar
								username={partner.username}
								office={partner.office}
								img={partner.img}
							/>
						</ul>
					))}
				</S.Responsibles>
				<S.Info>
					<div>ABERTO EM 10/04/2022</div>
					<div>ATIVIDADE RECENTE</div>
				</S.Info>
				<S.Chat>

				</S.Chat>
			</div>
		</S.Container>
	);
};

export default Ticket;