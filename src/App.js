import './static/variables.css';
import './static/base.css';
import { useContext, useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Box, Button, ThemeProvider } from '@mui/material';
// import { theme } from './static/theme';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./i18next/config";
import i18next from 'i18next';
import { fallbackLng, languages } from './constants';
import { routes } from './Routes';
import { ColorModeContext } from './static';
import { useTheme } from '@emotion/react';
// import { ColorContextProvider, ColorModeContext } from './static';

const App = () => {
	let element = useRoutes(routes);
	let { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		let currentLang = localStorage.getItem("language");

		if (!currentLang) {
			localStorage.setItem("language", fallbackLng);
		} else if (languages.includes(currentLang)) {
			i18next.changeLanguage(currentLang);
		}

	}, []);

	const { mode, toggleMode } = useContext(ColorModeContext);
	// console.log(mode)
	const theme = useTheme();

	return (
		<>
			{/* <Box
				sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: theme.palette.primary.navBg,
					color: 'text.primary',
					borderRadius: 1,
					p: 3,
				}}
			>
				<Button variant="outlined" onClick={toggleMode}>
					change Mode
				</Button>
			</Box> */}
			{/* <ThemeProvider theme={theme}> */}
				<Header />
				{element}
				<Footer />
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
