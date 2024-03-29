import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

/** HACK :
 * 1. 터미널에 npm start 실행 시 브라우저에 바로 localhost:3000 탭이 뜨지 않는 이유
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
