import Users from "./Users";
import {connect} from "react-redux";
import {
  follow, getUsersThunk, setCurrentPage,
  toggleDisabledBtn, unfollow } from "../../redux/users-reducer";
import React from 'react';
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
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
             users={this.props.users}
             disabledBtn={this.props.disabledBtn}/>
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    disabledBtn: state.usersPage.disabledBtn
  }
};

export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage, toggleDisabledBtn, getUsersThunk
}) (UsersContainer);