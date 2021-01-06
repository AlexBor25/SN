import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if(!userId) {
      userId = 7169;
    }

    this.props.getUserProfile(userId);
  };

  render() {

    if (!this.props.isAuth) {
      return <Redirect to={'/login'} />
    }

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const WithUrlDataPC = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataPC);