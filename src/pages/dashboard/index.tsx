import React from "react";
import * as S from "./styles";
import Title from "../../components/title";
import Database from "../../components/database";

const Dashboard: React.FC = () => {
	const data = [{
		label: "ASA ESQUERDA",
		temperature: 24,
		moisture: 25,
	}, {
		label: "CASTELINHO",
		temperature: 24,
		moisture: 25,     
	}, {
		label: "DATACENTER",
		temperature: 28,
		moisture: 25,    
	}, {
		label: "ASA DIREITA",
		temperature: 24,
		moisture: 25,
	}, {
		label: "AUDITORIO",
		temperature: 24,
		moisture: 25,   
	}];
	return (
		<S.Container>
			<Title text="DATACENTER ANALYTICS"/>
			<ul>
				{data.map((data, index) => (
					<Database 
						key={index}
						label={data.label}
						temperature={data.temperature}
						moisture={data.moisture}
					/>
				))}
			</ul>
		</S.Container>
	);
};

export default Dashboard;