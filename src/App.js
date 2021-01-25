import './App.css';
import Nav from "./components/Nav/Nav";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => {
              return <React.Suspense fallback={<Preloader/>}>
                <UsersContainer/>
              </React.Suspense>
            }}/>
            <Route path='/news' render={News}/>
            <Route path='/settings' render={() => {
              return <React.Suspense fallback={<Preloader/>}>
                <Settings/>
              </React.Suspense>
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
