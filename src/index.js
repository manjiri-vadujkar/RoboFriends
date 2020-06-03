import React from 'react';
import ReactDOM from 'react-dom'; //ReactDom is used for rendering to websites
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; //predefined classes for styling like bootstrap


ReactDOM.render(
<App />
  , 
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
