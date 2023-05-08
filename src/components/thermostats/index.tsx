import React from "react";
import * as S from "./styles";

interface Props {
    temperature: number;
	moisture: number;
}

const Thermostat: React.FC<Props> = ({temperature, moisture}) => {
	return (
		<S.Thermostats>
			<S.TemperatureThermostat>
				<div className='color'>
					<div className='values'>
						<span className='legend'>Max 28</span>
						<span className='value'>{temperature}</span>
						<span className='legend'>Calor</span>
					</div>
					<div className='divisor'></div>
				</div>
			</S.TemperatureThermostat>
			<S.UmidityThermostat>
				<div className='color'>
					<div className='values'>
						<span className='value'>{moisture}%</span>
						<span className='legend'>Umidade</span>
					</div>
					<div className='divisor'></div>
				</div>
			</S.UmidityThermostat>
		</S.Thermostats>
	);
};

export default Thermostat;