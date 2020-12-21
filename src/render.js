import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addNewMsg, addPost,
        updateNewMsg, updateNewPostText} from "./redux/state";

export function rerenderTree(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}
           updateNewPostText={updateNewPostText}
           addNewMsg={addNewMsg}
           updateNewMsg={updateNewMsg}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};