import Main from './pages/Main';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ThemeProvider } from '@mui/material';
import { theme } from './static/theme';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './static/variables.css';
import './static/base.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';

const App = () => {

let element = useRoutes(routes);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			{element}
			<Footer/>
		</ThemeProvider>
	);
}

export default App;
