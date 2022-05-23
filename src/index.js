import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";
import Helmet from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './app/about/about';
import Home from './app/home/home';

const APP = (<React.StrictMode>
  <div>
    <Helmet>
      <title>App Title</title>
      <meta name="og:title" content="React share" />
      <meta name="description" content="App Description" />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" exact
          element={<Home />} />
      </Routes>
    </BrowserRouter>

  </div>
</React.StrictMode>)
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
