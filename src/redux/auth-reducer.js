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

export const setAuthUserData= (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
  }
};

export const authThunk = () => {
  return (dispatch) => {
    auth().then(data => {
      if(data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    signIn(email, password, rememberMe).then(data => {
      if(data.resultCode === 0) {
        dispatch(authThunk());
      } else {
        const action = stopSubmit('login', {
          _error: 'Invalid email or password'
        })
        dispatch(action);
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    signOut().then(data => {
      if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
  }
}


export default authReducer;