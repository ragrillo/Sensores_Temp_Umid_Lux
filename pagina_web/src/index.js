import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  :root{
    --cor-fundo-principal: #0081C9;
    --cor-fundo-secundaria: #5BC0F8;
    --cor-fonte-primaria: #ffc93c; 
    --cor-fonte-secundaria:#86e5ff;
  }
  body {
    background: var(--cor-fundo-principal);
    color: var(--cor-fonte-primaria);
    font-size: 18px;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
