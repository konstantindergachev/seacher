import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { monsters } from './stubs/monsters';

ReactDOM.render(<App data={monsters} />, document.getElementById('root'));
