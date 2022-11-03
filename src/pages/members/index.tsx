import React from "react";
import * as S from "./styles";
import Title from "../../components/title";
import Button from "../../components/form/button";
import SearchBar from "../../components/form/searchBar";
import Table from "../../components/table";
import members from "../../data/members.json";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BuildIcon from "@mui/icons-material/Build";
import Avatar from "../../components/avatar";
import Status from "../../components/status";

const Members: React.FC = () => {
	const cols = [{
		field: "NOME COMPLETO",
		icon: <PersonIcon/>
	}, {
		field: "SETOR",
		icon: <HomeIcon/>
	}, {
		field: "CPF",
		icon: <LockPersonIcon/>
	}, {
		field: "DATA DE INÍCIO",
		icon: <ScheduleIcon/>
	}, {
		field: "STATUS",
		icon: <ScheduleIcon/>
	}, {
		field: "FERRAMENTAS",
		icon: <BuildIcon/>
	}];
	return (
		<S.Container>
			<Title text="MEMBROS"/>
			<section>
				<header>
					<Button value="NOVO MEMBRO"/>
					<SearchBar color="gray"/>
				</header>
				<Table cols={cols}>
					{members.map((member) => (
						<tr key={member.id}>
							<td><input type="checkbox"/></td>
							<td>
								<Avatar 
									username={member.username}
									office={member.office}
									img={member.img}
								/>
							</td>
							<td>
								<p className='local'>
									<span>{member.local.floor}</span>
									<span>{member.local.sector}</span>
								</p>
							</td>
							<td>{member.cpf}</td>
							<td>{member.date}</td>
							<td>
								<Status key={member.key} label={member.status}/>
							</td>
						</tr>
					))}
				</Table>
			</section>
		</S.Container>
	);
};

export default Members;