import React, { useState } from "react";
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
import { Checkbox } from "@mui/material";

const Members: React.FC = () => {
	const cols = [{
		field: undefined,
		icon: undefined,
	}, {
		field: "MEMBRO",
		icon: <PersonIcon />
	}, {
		field: "SETOR",
		icon: <HomeIcon />
	}, {
		field: "CPF",
		icon: <LockPersonIcon />
	}, {
		field: "DATA DE INÍCIO",
		icon: <ScheduleIcon />
	}, {
		field: "STATUS",
		icon: <ScheduleIcon />
	}, {
		field: "FERRAMENTAS",
		icon: <BuildIcon />
	}];
	const [query, setQuery] = useState("");
	const Search = (data: [{
		id: number,
		username: string,
		email: string,
		cpf: string,
		office: string,
		floor: string,
		sector: string
		date: string,
		status: string,
		color: string,
		img: string
	}]) => {
		return data.filter((item) => (
			item.username.toLowerCase().includes(query)
		));
	};
	return (
		<S.Container>
			<Title text="MEMBROS" />
			<section>
				<header>
					<Button value="NOVO MEMBRO" />
					<SearchBar color="gray" onChange={(e) => console.log(e.target.value)} />
				</header>
				<Table cols={cols}>
					{members.map((member) => (
						<tr key={member.id}>
							<td><Checkbox size="medium" /></td>
							<td>
								<Avatar
									username={member.username}
									office={member.office}
									img={member.img}
									color={"dark"}
								/>
							</td>
							<td>
								<p className='local'>
									<span>{member.floor}</span>
									<span>{member.sector}</span>
								</p>
							</td>
							<td>{member.cpf}</td>
							<td>{member.date}</td>
							<td>
								<Status color={member.color} label={member.status} />
							</td>
							<td>
								<div className="tools">
									<Button value="RESETAR SENHA" color="blue" />
									<Button value="DESATIVAR" color="red" />
								</div>
							</td>
						</tr>
					))}
				</Table>
			</section>
		</S.Container>
	);
};

export default Members;