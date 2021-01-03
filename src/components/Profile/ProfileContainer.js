import React from "react";
import axios from 'axios';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAction} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if(!userId) {
      userId = 7169;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  };

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const WithUrlDataPC = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAction
})(WithUrlDataPC);