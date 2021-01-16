import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav/>
        <div className="app-wrapper-content">
          <Route path='/login' render={() => <Login/>}/>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
