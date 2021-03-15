import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
// import App from './App';
// import Login from './sec/component/Login';
// import SignUp from './uss/component/SignUp';
import ArticleList from './bbs/component/ArticleList';
import App from './App';
// import ArticleAdd from './bbs/component/ArticleAdd';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
