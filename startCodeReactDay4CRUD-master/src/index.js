import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"
import registerServiceWorker from './registerServiceWorker';
import DataFacade from './DataFacade';

ReactDOM.render(<App DataFacade={DataFacade}/>, document.getElementById('root'));

registerServiceWorker();

