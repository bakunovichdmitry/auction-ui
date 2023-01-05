import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {ThemeProvider, createTheme} from '@mui/material'
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

import App from "./App";
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3054E1',
    },
  },
});

const store = configureStore({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

