import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;

    if(!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}
               isOwner={!this.props.match.params.userId}
               status={this.props.status}
               saveProfile={this.props.saveProfile}
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}/>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
};

export default compose(
  connect(mapStateToProps, {getUserProfile,
   getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
) (ProfileContainer);