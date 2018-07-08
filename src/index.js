import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { cats } from './cats';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
		<CardList cats={cats}/>
	, document.getElementById('root'));
registerServiceWorker();
