import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MovieContextProvider } from './contexts/MovieContext'
import {FavouritesContextProvider} from './contexts/FavouritesContext'

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <FavouritesContextProvider>
        <App />
      </FavouritesContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
