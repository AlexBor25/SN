import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


function rerenderTree() {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);