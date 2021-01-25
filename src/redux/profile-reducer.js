import {getUserStatus, savingPhoto, savingProfile, setUsers, updateUserStatus} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state;
  }
};

export const addPostAction = (addPostMsg) => ({type: ADD_POST, addPostMsg});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (id) => async (dispatch) => {

  const response = await setUsers(id);

  dispatch(setUserProfile(response.data));
}

export const getStatus = (id) => async (dispatch) => {

  const response = await getUserStatus(id);

  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {

  const response = await updateUserStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export const savePhoto = (file) => async (dispatch) => {

  const response = await savingPhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {

  const id = getState().auth.userId

  const response = await savingProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(id));
  } else {
    dispatch(stopSubmit('ProfileDataForm', {
      _error: response.data.messages[0]
    }));
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;