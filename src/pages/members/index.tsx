import React, { useState } from "react";
import * as S from "./styles";
import members from "../../data/members.json";
import Title from "../../components/title";
import Button from "../../components/form/button";
import Table from "../../components/table";
import FilterBar from "../../components/form/filterBar";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BuildIcon from "@mui/icons-material/Build";
import Avatar from "../../components/avatar";
import Status from "../../components/status";
import { Checkbox } from "@mui/material";
import Pagination from "../../components/pagination";
import { Link } from "react-router-dom";

type Member = typeof members;
const Members: React.FC = () => {
	const cols = [
		{
			field: undefined,
			icon: undefined,
		},
		{
			field: "MEMBRO",
			icon: <PersonIcon />,
		},
		{
			field: "SETOR",
			icon: <HomeIcon />,
		},
		{
			field: "CPF",
			icon: <LockPersonIcon />,
		},
		{
			field: "DATA DE INÍCIO",
			icon: <ScheduleIcon />,
		},
		{
			field: "STATUS",
			icon: <ScheduleIcon />,
		},
		{
			field: "FERRAMENTAS",
			icon: <BuildIcon />,
		},
	];
	const [query, setQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itensPerPage, setItensPerPage] = useState(6);

	const indexOfLastItem = currentPage * itensPerPage;
	const indexOfFirstItem = indexOfLastItem - itensPerPage;
	const currentItens = members.slice(indexOfFirstItem, indexOfLastItem);
	const pageNumbers = Math.ceil(members.length / itensPerPage);

	const filters = currentItens.filter((item) => 
		item.username.toLowerCase().includes(query) ||
		item.office.toLowerCase().includes(query) ||
		item.sector.toLowerCase().includes(query) ||
		item.floor.toLowerCase().includes(query) ||
		item.cpf.toLowerCase().includes(query) ||
		item.date.toLowerCase().includes(query) ||
		item.status.toLowerCase().includes(query)
	);
	return (
		<S.Container>
			<Title text="MEMBROS" />
			<section>
				<header>
					<Link to={"/newMember"}>
						<Button value="NOVO MEMBRO" />
					</Link>
					<FilterBar
						color="gray"
						onChange={(e) => {
							setQuery(e.target.value); 
							setItensPerPage(members.length);
						}}
					/>
				</header>
				{filters.length != 0 && (
					<>
						<Table cols={cols} >
							{filters.map((member, index) => (
								<tr key={index}>
									<td>
										<Checkbox size="medium" />
									</td>
									<td>
										<Avatar
											username={member.username}
											office={member.office}
											img={member.img}
											color={"dark"}
										/>
									</td>
									<td>
										<p className="local">
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
						<Pagination
							setItemsPerPage={(e) => {setItensPerPage(e.target.value);}}
							firstItem={indexOfFirstItem}
							lastItem={indexOfFirstItem + currentItens.length}
							totalItens={members.length}
							NavigateBefore={() => {
								if(currentPage <= pageNumbers && currentPage != 1){
									const pageNumber = currentPage;
									setCurrentPage(pageNumber - 1);
								}
							}}
							NavigateNext={() => {
								if(currentPage <= pageNumbers && pageNumbers != currentPage){
									const pageNumber = currentPage;
									setCurrentPage(pageNumber + 1);
								}
							}}
						/>
					</>
				)}
				{filters.length === 0 && (
					<div className="emptyTable">
						<img src="img/empty-file.png" alt="Tabela Vazia"/>
						<p className="emptyMessage">Nenhum resultado encontrado...</p>
						<p>Tente reajustar sua busca ou filtro para encontrar o que está procurando</p>
					</div>
				)}				
			</section>
		</S.Container>
	);
};

export default Members;