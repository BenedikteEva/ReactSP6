import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App3';
//import JokeStore from './JokeStore';
import PersonStore from './PersonStore';
//import App from './App2';
//import Clock from './Clock';
//import Toggle from './Toggle';
//import NewFile from './NewFile'
//import ListDemo from './ListDemo';
//import NameForm from './NameForm';
//import EssayForm from './EssayForm';
//import FlavorForm from './FlavorForm';
//import Reservation from './Reservation';
//import JokeStore from './JokeStore';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App3 PersonStore={PersonStore} />, document.getElementById('root'));
registerServiceWorker();

