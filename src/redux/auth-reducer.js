import {auth, getCaptchaUrl, signIn, signOut} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL = 'GET-CAPTCHA-URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL,
    payload: {captchaUrl}
  }
};

export const authThunk = () => async (dispatch) => {

  const response = await auth();

  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

  const response = await signIn(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(authThunk());
  } else {

    if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    }

    const message = response.data.messages.length > 0
      ? response.data.messages[0]
      : "Some error";

    dispatch(stopSubmit('login', {
      _error: message
    }));
  }
}

export const logout = () => async (dispatch) => {

  const response = await signOut();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export const getCaptcha = () => async (dispatch) => {

  const response = await getCaptchaUrl();

  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReducer;