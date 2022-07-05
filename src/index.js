import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'

import { BrowserRouter} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <ThemeContextProvider>
           {/* <React.StrictMode>
    <BrowserRouter> */}
      <App />
    {/* </BrowserRouter>
  </React.StrictMode>, */}
     
    </ThemeContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
