import React from "react";
import * as S from "./styles";
import Title from "../../components/title";
import Avatar from "../../components/avatar";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import Message from "../../components/message";
import messages from "../../data/messages.json";

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
					<ul>
						{team.map((partner, index) => (
							<li key={index}>
								<Avatar
									username={partner.username}
									office={partner.office}
									img={partner.img}
								/>
							</li>
						))}
					</ul>
				</S.Responsibles>
				<S.Chat>
					<header>
						<div>ABERTO EM 10/04/2022</div>
					</header>
					<S.Messages>
						{messages.map((msg) => {
							return (
								<Message
									key={msg.id}
									className="mymessage"
									content={msg.content}
									username={msg.username}
									userImage={msg.userImage}
									date={msg.date}
								/>
							);
						})}
					</S.Messages>
					<footer>
						<S.Type>
							<button>
								<SentimentSatisfiedOutlinedIcon />
							</button>
							<input type="text" id="message" placeholder="Digite uma mensagem"/>
						</S.Type>
						<button className="close">
							<HandshakeOutlinedIcon />
						</button>
						<button className="send">
							<SendOutlinedIcon />
						</button>
					</footer>
				</S.Chat>
			</div>
		</S.Container>
	);
};

export default Ticket;