import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";


function rerenderTree() {
  ReactDOM.render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} state={store.getState()}/>
    </BrowserRouter>, document.getElementById('root'));
};

rerenderTree(store.getState());

store.subscribe(rerenderTree);