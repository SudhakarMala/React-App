import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
//import { LoginBootstrap } from './components/LoginBootstrap';
import { FlipkartIndex } from './components/FlipKart/flipkart-index';
//import {Login} from './components/Login'
import {Object1} from './Practice/JS-Objects/Object1'
import {DataBinding} from './Practice/DataBinding'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlipkartIndex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
