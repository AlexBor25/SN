import {auth, signIn, signOut} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
  }
};

export const authThunk = () => async (dispatch) => {

  const response = await auth();

  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

  const response = await signIn(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(authThunk());
  } else {
    const action = stopSubmit('login', {
      _error: 'Invalid email or password'
    })
    dispatch(action);
  }
}

export const logout = () => async (dispatch) => {

  const response = await signOut();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}


export default authReducer;