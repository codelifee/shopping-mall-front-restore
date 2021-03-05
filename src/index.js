<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './StateProvider/Reducer';
import { StateProvider } from './StateProvider/StateProvider';
import { Provider } from 'react-redux';
import store from './services/store';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./StateProvider/Reducer";
import { StateProvider } from "./StateProvider/StateProvider";
>>>>>>> 66cabdd201344513c5dcc4afc348645df2291b8d

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
<<<<<<< HEAD
  document.getElementById('root'),
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  // document.getElementById('root'),
=======
  document.getElementById("root")
>>>>>>> 66cabdd201344513c5dcc4afc348645df2291b8d
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
