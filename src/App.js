import Main from './pages/Main';
import Index from "./pages/About/Certificates/index";
import { ThemeProvider } from '@emotion/react';
import { theme } from './static/theme';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './static/variables.css';
import './static/base.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			{/* <Main /> */}
			<Index/>
		</ThemeProvider>
	);
}

export default App;
