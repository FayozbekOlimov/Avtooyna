import './static/variables.css';
import './static/base.css';
import Main from './pages/Main';
import { ThemeProvider } from '@mui/material';
import { theme } from './static/theme';
import Unions from './pages/Main/About/Unions';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Unions />
		</ThemeProvider>
	);
}

export default App;
