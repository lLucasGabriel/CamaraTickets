import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { light, dark } from "../styles/themes";
import usePersistedState from "../hooks/usePersistedState";
import GlobalStyle from "../styles/global";
import Header from "../components/header";
import Menu from "../components/menu";
import Profile from "../pages/profile";
import NewMember from "../pages/newMember";
import NewTicket from "../pages/newTicket";
import Members from "../pages/members";
import Tickets from "../pages/tickets";
import Ticket from "../pages/ticket";
import Dashboard from "../pages/dashboard";

export default function MainRoutes() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
	const toggleTheme = () => {
		setTheme(theme === light ? dark : light);
	};
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Header toggleTheme={toggleTheme} />
				<main>
					<Menu />
					<Routes>
						<Route path='/' element={<Profile />} />
						<Route path='/newMember' element={<NewMember />} />
						<Route path='/newTicket' element={<NewTicket />} />
						<Route path='/members' element={<Members />} />
						<Route path='/tickets' element={<Tickets />} />
						<Route path='/ticket' element={<Ticket />} />
						<Route path='/dashboard' element={<Dashboard />} />
					</Routes>
				</main>
				<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
}
