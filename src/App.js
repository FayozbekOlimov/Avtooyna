import { createContext, useContext, useEffect, useState } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Box, Button, ThemeProvider } from '@mui/material';
// import { theme } from './static/theme';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './static/variables.css';
import './static/base.scss';
import { routes } from './Routes';
import i18next from 'i18next';
import { fallbackLng, languages } from './constants';
import { useTheme } from '@mui/material';
import GetConsultModal from "./components/GetConsultModal";

export const ConsultContext = createContext(null);

const App = () => {
	const [isOpenConsultModal, setIsConsultModal] = useState(false);

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

	const theme = useTheme();

	const onOpenConsultModal = () => setIsConsultModal(true);
	const onCloseConsultModal = () => setIsConsultModal(false);

	const consultContextValue = {
		isOpenConsultModal,
		onOpenConsultModal,
		onCloseConsultModal
	}

	return (
		<ThemeProvider theme={theme}>
			<ConsultContext.Provider value={consultContextValue}>
				<Header />
				{element}
				<Footer />
				<GetConsultModal {...consultContextValue} />
			</ConsultContext.Provider>
		</ThemeProvider>
	);
}

export default App;
