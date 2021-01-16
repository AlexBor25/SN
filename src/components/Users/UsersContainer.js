import Users from "./Users";
import {connect} from "react-redux";
import {
  follow, getUsersThunk, setCurrentPage,
  toggleDisabledBtn, unfollow } from "../../redux/users-reducer";
import React from 'react';
import Preloader from "../Preloader/Preloader";
import {
  getCurrentPageSelector, getDisabledBtnSelector, getIsLoadingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector
} from "../../redux/user-selectors";

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
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isLoading: getIsLoadingSelector(state),
    disabledBtn: getDisabledBtnSelector(state)
  }
};

export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage, toggleDisabledBtn, getUsersThunk
}) (UsersContainer);