import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from "./pages/mainPage";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <MainPage />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
