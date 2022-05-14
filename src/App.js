import Main from './pages/Main';
import { ThemeProvider } from '@mui/material';
import { theme } from './static/theme';
import "./i18next/config";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './static/variables.css';
import './static/base.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import i18next from 'i18next';
import { fallbackLng, languages } from './constants';
import Header from "./layout/Header";
import Footer from "./layout/Footer";


const App = () => {

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

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Main />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
