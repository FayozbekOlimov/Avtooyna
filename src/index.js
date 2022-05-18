import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { ColorContextProvider } from './static';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<ColorContextProvider>
					<App />
				</ColorContextProvider>
			</Router>
		</Suspense>
	</React.StrictMode>
);

