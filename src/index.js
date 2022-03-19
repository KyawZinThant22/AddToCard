import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context, { Main } from './components/Context';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <React.StrictMode>

  <Context>
      <App/>
  </Context>
     
  

  </React.StrictMode>,
  document.getElementById('root')
);


