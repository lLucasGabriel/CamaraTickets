import React, { useState } from "react";
import * as S from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import SearchItens from "../../../data/search.json";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorageIcon from "@mui/icons-material/Storage";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

type Filters = typeof SearchItens;

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState("");
	const filters = SearchItens.filter((item) => 
		item.request?.toLowerCase().includes(query) ||
		item.requester?.toLowerCase().includes(query) ||
		item.username?.toLowerCase().includes(query) ||
		item.office?.toLowerCase().includes(query) ||
		item.sector?.toLowerCase().includes(query) ||
		item.device?.toLowerCase().includes(query) ||
		item.hostname?.toLowerCase().includes(query) ||
		item.mac?.toLowerCase().includes(query) ||
		item.ip?.toLowerCase().includes(query)
	);
	return(
		<S.Fieldset>
			<input
				type={"text"}
				name={"search"}
				id={"search"}
				placeholder={"BUSCAR"}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<label htmlFor='search'>
				<div>
					<SearchIcon />
				</div>
			</label>
			{query.length != 0 && (
				<S.Modal>
					{filters.map((item) => (
						<>
							{item.type === "user" && (
								<div key={item.id} className="item">
									<PersonOutlineIcon />
									<div className="content">
										<p className="title">{item.username}</p>
										<p>{item.sector}</p>
										<small>{item.office}</small>
									</div>
								</div>
							)}
							{item.type === "ticket" && (
								<div key={item.id} className="item">
									<ConfirmationNumberIcon />
									<div className="content">
										<p className="title">{item.request}</p>
										<p>{item.sector}</p>
										<small>Aberto por {item.requester}</small>
									</div>
								</div>
							)}
							{item.type === "device" && (
								<div key={item.id} className="item">
									<StorageIcon />
									<div className="content">
										<span>{item.device?.toLocaleUpperCase()}</span>
										<span>{item.hostname}</span>
										<p>{item.mac}</p>
										<p>{item.ip}</p>
										<small>{item.sector}</small>
									</div>
								</div>
							)}
						</>
					))}
					{filters.length === 0 && (
						<div className="item">
							<QuestionMarkIcon />
							<div className="content">
								<p className="title">Nada Encontrado</p>
								<p>Nenhum item corresponde a sua pesquisa</p>
							</div>
						</div>								
					)}
				</S.Modal>
			)}
		</S.Fieldset>
	);
};

export default SearchBar;

//<div key={item.id}>
//{item.type === "user" ? <PersonOutlineIcon /> : undefined}
//{item.type === "ticket" ? <ConfirmationNumberIcon /> : undefined}
//{item.type === "device" ? <StorageIcon /> : undefined}
//{item.type}
//
//</div>