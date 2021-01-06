import {followUser, getUsers, unfollowUser} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';
const TOGGLE_DISABLED_BTN = 'TOGGLE-DISABLED-BTN';

const initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  disabledBtn: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        })
      };
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount};
    case TOGGLE_IS_LOADING:
      return {...state, isLoading: action.isLoading};
    case TOGGLE_DISABLED_BTN:
      return {
        ...state,
        disabledBtn: action.disabledBtn
          ? [...state.disabledBtn, action.userId]
          : state.disabledBtn.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUserTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const toggleDisabledBtn = (disabledBtn, userId) => ({type: TOGGLE_DISABLED_BTN, disabledBtn, userId});

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setUserTotalCount(data.totalCount));
    });
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleDisabledBtn(true, id));
    followUser(id).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(id))
      }
      dispatch(toggleDisabledBtn(false, id));
    });
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleDisabledBtn(true, id));
    unfollowUser(id).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(id))
      }
      dispatch(toggleDisabledBtn(false, id));
    });
  }
}

export default usersReducer;