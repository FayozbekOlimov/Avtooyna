import { createContext, useContext, useEffect, useState } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ThemeProvider } from '@mui/material';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { routes } from './Routes';
import i18next from 'i18next';
import { fallbackLng, languages } from './constants';
import { useTheme } from '@mui/material';
import GetConsultModal from "./components/GetConsultModal";
import { ColorModeContext } from './static';

export const ConsultContext = createContext(null);
export const ModeContext = createContext(null);

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

	const { mode, setMode } = useContext(ColorModeContext);

	useEffect(() => {
		let currentMode = JSON.parse(localStorage.getItem("mode"));

		if (!currentMode) {
			localStorage.setItem("mode", JSON.stringify(mode));
			return;
		}

		// if (currentMode['isImage']) {
		// 	Array.from(document.images).forEach(img => {
		// 		img.style.display = 'none';
		// 	})
		// }

		if (currentMode['color'] === 'gray') {
			document.body.style.filter = 'grayscale(1)';
			setMode(currentMode);
			return;
		}
		setMode(currentMode);
	}, []);

	// useEffect(() => {
	// 	let isImage = localStorage.getItem('isImage');
	// 	if (isImage == null) {
	// 		localStorage.setItem('isImage', true)
	// 	} else {
	// 		localStorage.setItem('isImage', isImage);
	// 	}
	// }, []);

	const theme = useTheme();

	const onOpenConsultModal = () => setIsConsultModal(true);
	const onCloseConsultModal = () => setIsConsultModal(false);

	const consultContextValue = {
		isOpenConsultModal,
		onOpenConsultModal,
		onCloseConsultModal
	}

	return (
		<div className="avtooyna__wrapper">
			<ThemeProvider theme={theme}>
				<ConsultContext.Provider value={consultContextValue}>
					<Header />
					{element}
					<Footer />
					<GetConsultModal {...consultContextValue} />
				</ConsultContext.Provider>
			</ThemeProvider>
		</div>
	);
}

export default App;
