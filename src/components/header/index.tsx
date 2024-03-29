import React, { useContext, useState } from "react";
import * as S from "./styles";
import { ThemeContext } from "styled-components";
import { light } from "../../styles/themes";
import { Link } from "react-router-dom";
import SearchBar from "../form/searchBar";
import Notifications from "../notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
	const [openNotifications, setOpenNotifications] = useState(false);
	const theme = useContext(ThemeContext);
	return(
		<S.Header>
			<S.Title>
				<S.CoatOfArms>
					<div>
						<img src="favicon.ico" alt="brasão" />
					</div>
				</S.CoatOfArms>
				<h1>CÂMARA TICKETS</h1>
			</S.Title>
			<SearchBar />
			<S.Tools>
				<S.Button onClick={toggleTheme}>
					{theme === light ? <DarkModeIcon /> : <LightModeIcon />}
				</S.Button>
				<S.Button onClick={(event: React.MouseEvent<HTMLElement>) => {setOpenNotifications(!openNotifications);}}>
					<NotificationsNoneIcon />
					{openNotifications === true ? <Notifications/> : null}
				</S.Button>
				<S.Button>
					<Link to="/">
						<img src="img/lucas.png" alt="avatar" />
						<p>Lucas Gabriel</p>
						<KeyboardArrowDownIcon />
					</Link>
				</S.Button>
			</S.Tools>
		</S.Header>
	); 
};

export default Header;