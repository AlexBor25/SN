const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postData: [
    {id: 1, message: 'Начал учить Реакт', likesCount: 15},
    {id: 2, message: 'Скоро собираюсь на собес', likesCount: 10},
  ],
  newPostText: 'YoYo',
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
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
};

export const updatePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
};

export default profileReducer;