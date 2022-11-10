import React from "react";
import * as S from "./styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Notifications: React.FC = () => {
	const notifications = [{
		img: "img/user1.png",
		username: "Shairon Hosokawa",
		activity: "alterou uma senha",
		date: "30/10/2022 10:35"
	}, {
		img: "img/user2.png",
		username: "Albert Camus",
		activity: "abriu um chamado",
		date: "30/10/2022 9:02" 
	}, {
		img: "img/user3.png",
		username: "Aldous Huxley",
		activity: "adicionou um membro",
		date: "28/10/2022 15:45" 
	}, {
		img: "img/user4.png",
		username: "Sophie Turner",
		activity: "fechou um chamado",
		date: "25/10/2022 12:01" 
	}, {
		img: "img/user5.png",
		username: "Max Horkheimer",
		activity: "atendeu um chamado",
		date: "15/10/2022 18:39" 
	}, {
		img: "img/user6.png",
		username: "Theodore Adorno",
		activity: "liberou um Mac",
		date: "10/08/2022 11:40" 
	}, {
		img: "img/user7.png",
		username: "Liev Davidovitch",
		activity: "fechou um chamado",
		date: "9/08/2022 13:02" 
	}, {
		img: "img/user1.png",
		username: "Shairon Hosokawa",
		activity: "alterou uma senha",
		date: "30/10/2022 10:35"
	}, {
		img: "img/user2.png",
		username: "Albert Camus",
		activity: "abriu um chamado",
		date: "30/10/2022 9:02" 
	}, {
		img: "img/user3.png",
		username: "Aldous Huxley",
		activity: "adicionou um membro",
		date: "28/10/2022 15:45" 
	}, {
		img: "img/user4.png",
		username: "Sophie Turner",
		activity: "fechou um chamado",
		date: "25/10/2022 12:01" 
	}, {
		img: "img/user5.png",
		username: "Max Horkheimer",
		activity: "atendeu um chamado",
		date: "15/10/2022 18:39" 
	}, {
		img: "img/user6.png",
		username: "Theodore Adorno",
		activity: "liberou um Mac",
		date: "10/08/2022 11:40" 
	}, {
		img: "img/user7.png",
		username: "Liev Davidovitch",
		activity: "fechou um chamado",
		date: "9/08/2022 13:02" 
	}];
	return(
		<S.Box>
			<PlayArrowIcon/>
			{notifications.map((notification, index) => (
				<S.Notification key={index}>
					<img src={notification.img} alt="avatar" />
					<p>
						<strong>{notification.username}</strong>
						{notification.activity}
					</p>
					<small>{notification.date}</small>
				</S.Notification>
			))}
		</S.Box>
	);
};

export default Notifications;