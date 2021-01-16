import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Prtc2 from './prtc/Prtc2'
// import Index from './Practice/index'
// import App from './prtc/prtc3';

ReactDOM.render(
  <React.StrictMode>
   <Prtc2 appTitle="Person Manger" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
