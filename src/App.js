import './static/variables.css';
import './static/base.css';
import Main from './pages/Main';
import { ThemeProvider } from '@mui/material';
import { theme } from './static/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
