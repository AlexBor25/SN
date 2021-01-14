import {getUserStatus, setUsers, updateUserStatus} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  postData: [
    {id: 1, message: 'Начал учить Реакт', likesCount: 15},
    {id: 2, message: 'Скоро собираюсь на собес', likesCount: 10},
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        message: action.addPostMsg,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
};

export const addPostAction = (addPostMsg) => ({type: ADD_POST, addPostMsg});

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const getUserProfile = (id) => {
  return (dispatch) => {
    setUsers(id).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getStatus = (id) => {
  return (dispatch) => {
    getUserStatus(id).then(data => {
      dispatch(setStatus(data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    updateUserStatus(status).then(data => {
      if(data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;