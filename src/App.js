import Main from './pages/Main';
import { ThemeProvider } from '@mui/material';
import { theme } from './static/theme';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './static/variables.css';
import './static/base.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
