import {createSelector} from "reselect";

const getUsers = (state) => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users;
})


export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCountSelector= (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage;
};

export const getIsLoadingSelector = (state) => {
  return state.usersPage.isLoading;
};

export const getDisabledBtnSelector = (state) => {
  return state.usersPage.disabledBtn;
};