import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import React from "react";
import store from "./redux/state";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav friends={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile
            posts={props.state.profilePage}
            dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={() => <Dialogs
            dialogs={props.state.dialogsPage}
            dispatch={props.dispatch} />} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
};

export default App;
