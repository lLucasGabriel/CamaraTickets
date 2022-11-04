import React from "react";
import * as S from "./styles";
import Title from "../../components/title";
import Input from "../../components/form/input";
import Textarea from "../../components/form/textarea";
import Select from "../../components/form/select";
import Button from "../../components/form/button";

const NewTicket: React.FC = () => {
	const sectors = [{
		value: "divsist",
		text: "DIVISÃO DE SISTEMAS DE INFORMAÇÃO",
	},{
		value: "divinfra",
		text: "DIVISÃO DE INFRAESTRUTURA E TELEFONIA",
	}];
	const responsibles = [{
		value: "lucas",
		text: "LUCAS GABRIEL MOURA SOARES",
	},{
		value: "joão",
		text: "JOÃO VITOR SANTOS",
	}];
	const priorities = [{
		value: "low",
		text: "MÍNIMA",
	},{
		value: "medium",
		text: "MÉDIA",
	}, {
		value: "maximum",
		text: "MÁXIMA"
	}];
	const origins = [{
		value: "camara",
		text: "CÂMARA MUNICIPAL DE SANTOS",
	},{
		value: "prefeitura",
		text: "PREFEITURA DE SANTOS",
	}];
	return (
		<S.Container>
			<Title text="NOVO TICKET"/>
			<form>
				<Input 
					type="text"
					label="SOLICITANTE"
					id="requester"
					required={true}
				/>
				<Select
					label="SETOR"
					id="sector"
					required={true}
				>
					{sectors.map((sector, index) => (
						<option key={index} value={sector.value}>
							{sector.text}
						</option>
					))}
				</Select>
				<Input 
					type="text"
					label="CATEGORIA"
					id="category"
					required={true}
				/>
				<Textarea 
					label="SOLICITAÇÃO"
					id="category"
					required={true}
				/>
				<Select
					label="RESPONSÁVEL"
					id="responsible"
					required={true}
				>
					{responsibles.map((responsible, index) => (
						<option key={index} value={responsible.value}>
							{responsible.text}
						</option>
					))}
				</Select>
				<Select
					label="PRIORIDADE"
					id="priority"
					required={true}
				>
					{priorities.map((priority, index) => (
						<option key={index} value={priority.value}>
							{priority.text}
						</option>
					))}
				</Select>
				<Select
					label="ORIGEM"
					id="origin"
					required={true}
				>
					{origins.map((origin, index) => (
						<option key={index} value={origin.value}>
							{origin.text}
						</option>
					))}
				</Select>
				<Button 
					value="CADASTRAR"
				/>
			</form>
		</S.Container>
	);
};

export default NewTicket;