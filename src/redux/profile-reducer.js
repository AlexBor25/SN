const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  postData: [
    {id: 1, message: 'Начал учить Реакт', likesCount: 15},
    {id: 2, message: 'Скоро собираюсь на собес', likesCount: 10},
  ],
  newPostText: 'YoYo',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
};

export const addPostAction = () => {
  return {
    type: ADD_POST,
  }
};

export const updatePostAction = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
};

export const setUserProfileAction = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export default profileReducer;