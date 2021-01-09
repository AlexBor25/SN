import {auth} from "../api/api";

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
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
};

export const setAuthUserData= (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {userId, email, login}
  }
};

export const authThunk = () => {
  return (dispatch) => {
    auth().then(data => {
      if(data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login));
      }
    })
  }
}


export default authReducer;