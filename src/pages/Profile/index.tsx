import React, { useState } from "react";
import * as S from "./styles";
import Sidenav from "../../components/sidenav";
import Status from "../../components/status";
import Input from "../../components/form/input";
import Select from "../../components/form/select";
import Avatar from "../../components/avatar";
import Title from "../../components/title";
import Button from "../../components/form/button";

const Profile: React.FC = () => {
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
	const buttons = [{
		id: 1,
		modal: "about",
		value: "SOBRE"
	}, {
		id: 2,
		modal: "account",
		value: "MINHA CONTA"    
	}];
	const sectors = [{
		value: "divsist",
		text: "DIVISÃO DE SISTEMAS DE INFORMAÇÃO",
	},{
		value: "divinfra",
		text: "DIVISÃO DE INFRAESTRUTURA E TELEFONIA",
	}];
	const origins = [{
		value: "camara",
		text: "CÂMARA MUNICIPAL DE SANTOS",
	},{
		value: "prefeitura",
		text: "PREFEITURA DE SANTOS",
	}];
	const [modal, setModal] = useState("about");
	const [focus, setFocus] = useState(1);
	return (
		<>
			<S.Container>
				<Title text="MEU PERFIL"/>
				<S.Card>
					<h3>LUCAS GABRIEL</h3>
					<h4>ESTAGIÁRIO</h4>
					<div className="container">
						<div className="avatar"></div>
						{buttons.map((button) => (
							<button 
								key={button.id} 
								onClick={(event: React.MouseEvent<HTMLElement>) => {
									setModal(button.modal); 
									setFocus(button.id);
								}}
								className={focus === button.id ? "focused" : undefined}
							>
								{button.value}
							</button>
						))}
					</div>
				</S.Card>
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
							<Avatar
								key={index} 
								username={partner.username}
								office={partner.office}
								img={partner.img}
							/>
						))}
					</ul>
				</S.Team>
				{ modal === "about" ? (
					<S.About>
						<header><h3>SOBRE MIM</h3></header>
						<p>
                            Atendo dúvidas dos usuários sobre o manuseio do sistema corporativo e suas ferramentas de trabalho, soluciono problemas dentro quanto fora do ambiente do sistema, me contate também quando o seu computador ou impressora apresentar algum defeito ou erro desconhecido.
						</p>
						<Input 
							type="text"
							label="RAMAL"
							id="ramal"
							height="50px"
							width="100%"
							margin="15px"
							className="dark"
							value="4142"
							required={false}
						/>
					</S.About>
				) : (
					<S.Account>
						<header><h3>DADOS PESSOAIS</h3></header>
						<form>							
							<Input 
								type="text"
								label="NOME COMPLETO"
								id="name"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								value="LUCAS GABRIEL MOURA SOARES"
								required={true}
							/>
							<Input 
								type="text"
								label="USUÁRIO"
								id="username"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								value="LUCAS SOARES"
								required={true}
							/>
							<Input 
								type="password"
								label="SENHA"
								id="password"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								value="cms1234"
								required={true}
							/>
							<Input 
								type="date"
								label="NASCIMENTO"
								id="birthday"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								required={true}
							/>
							<Input 
								type="text"
								label="CPF"
								id="cpf"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								value="123.123.123.12"
								required={true}
							/>
							<Input 
								type="text"
								label="REGISTRO CMS"
								id="register"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								required={true}
							/>
							<Input 
								type="email"
								label="EMAIL ALTERNATIVO"
								id="email"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								value="llucas.gabriel@outlook.com"
								required={false}
							/>
							<Input 
								type="text"
								label="RAMAL"
								id="ramal"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								value="4142"
								required={false}
							/>
							<Select
								label="SETOR"
								id="sector"
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
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
								height="50px"
								width="100%"
								margin="5px"
								className="dark"
								required={true}
							>
								{origins.map((origin, index) => (
									<option key={index} value={origin.value}>
										{origin.text}
									</option>
								))}
							</Select>
							<Button 
								value="SALVAR"
							/>
						</form>
					</S.Account>
				)}
			</S.Container>
			<Sidenav />
		</>
	);
};

export default Profile;