import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'

import App from './components/App';

import './index.css';
  
const root = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>,    
    root
);
