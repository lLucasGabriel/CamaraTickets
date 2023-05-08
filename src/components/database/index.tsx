import React from "react";
import * as S from "./styles";
import Thermostat from "../thermostats";

interface Props {
	key: number;
	label: string;
    temperature: number;
	moisture: number;
}

const Database: React.FC<Props> = ({ key, label, temperature, moisture }) => {
	return(
		<S.Box key={key}>
			<S.Label>
				<p>{label}</p>
				<p className="title">TEMPERATURA</p>
			</S.Label>
			<S.Container>
				<Thermostat
					temperature={temperature}
					moisture={moisture}
				/>
			</S.Container>
			{temperature < 28 ? 
				<S.Status className="green">
					TEMPERATURA ESTÁVEL
				</S.Status>
				: 
				<S.Status className="red">
					TEMPERATURA ELEVADA
				</S.Status>
			}
		</S.Box>
	);
};

export default Database;