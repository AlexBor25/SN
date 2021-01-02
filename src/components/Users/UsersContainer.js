import Users from "./Users";
import {connect} from "react-redux";
import {
  followAction, setCurrentPageAction,
  setUsersAction, setUserTotalCountAction, toggleIsLoadingAction,
  unfollowAction
} from "../../redux/users-reducer";
import axios from "axios";
import React from 'react';
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <>
      {this.props.isLoading ? <Preloader /> : null}
      <Users follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}/>
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  }
};

export default connect(mapStateToProps, {
  follow: followAction,
  unfollow: unfollowAction,
  setUsers: setUsersAction,
  setCurrentPage: setCurrentPageAction,
  setTotalUsersCount: setUserTotalCountAction,
  toggleIsLoading: toggleIsLoadingAction
}) (UsersContainer);