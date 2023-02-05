import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App';

import './styles/global.css';
import './styles/fonts.css';

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(<App />);
