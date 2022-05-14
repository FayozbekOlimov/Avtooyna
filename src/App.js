import { ThemeProvider } from '@mui/material';
import { theme } from './static/theme';
import './static/variables.css';
import './static/base.css';
import Jobs from './pages/Main/About/Jobs';
// import Main from './pages/Main';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			{/* <Main /> */}
			<Jobs/>
		</ThemeProvider>
	);
}

export default App;
