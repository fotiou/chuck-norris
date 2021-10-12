import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider as MetaDataProvider } from "./context/metaDataProvider";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
	
	<BrowserRouter basename={baseUrl}>
		<MetaDataProvider>
			<App />
		</MetaDataProvider>
	</BrowserRouter>,
  rootElement);




