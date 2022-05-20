import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./i18next/config";
import 'antd/dist/antd.css';
import "./static/base.scss";
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

