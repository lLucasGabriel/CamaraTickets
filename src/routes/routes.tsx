import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { light, dark } from '../styles/themes'
import usePersistedState from '../hooks/usePersistedState';
import GlobalStyle from '../styles/global'
import Header from '../components/header'
import Menu from '../components/menu'
import Profile from '../pages/Profile';

export default function MainRoutes() {
	const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light);
	const toggleTheme = () => {
	  setTheme(theme === light ? dark : light)
	}
	return (
		<Router>
      		<ThemeProvider theme={theme}>
				<Header toggleTheme={toggleTheme}/>
							<main>
								<Menu />
								<Routes>
									<Route path='/' element={<Profile />} />
								</Routes>
							</main>
							<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
}
