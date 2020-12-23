const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MSG = 'ADD-NEW-MSG';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';


const store = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Начал учить Реакт', likesCount: 15},
        {id: 2, message: 'Скоро собираюсь на собес', likesCount: 10},
      ],

      newPostText: 'YoYo',
    },

    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Дима', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsC90-5Zdwq5nqCUUuYT2SP4i7vCCXTFMDg&usqp=CAU'},
        {id: 2, name: 'Вася', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHvzC6PRK6t1mv3-WWAhXzqiqm-a0p1nDGA&usqp=CAU'},
        {id: 3, name: 'Степан', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahFmNf55ZWPKqnXm3sJFAY68_Wa7lQt2Ftg&usqp=CAU'},
      ],

      messagesData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Да круто, давай топи'},
        {id: 3, message: 'А потом меня научишь?'},
      ],

      newMsg: 'Hello Man!',
    },

    sidebar: {
      friends: [
        {id: 1, name: 'Иван', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRK-WsZMGlxQAY7UptKCIm-H5AAhqQWtMbQ&usqp=CAU'},
        {id: 2, name: 'Петя', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHoo7NzeLepVR8gRlWKpJs5L2RlISmPjJbA&usqp=CAU'},
        {id: 3, name: 'Сергей', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyCXGIc_4SfOVk1MlUTkONZXFXvPv-Fcw3Q&usqp=CAU'},
      ]
    }
  },

  _rerenderTree() {
    console.log('State is changed');
  },

  getState() {
    return this._state;
  },

  subscribe (observer) {
    this._rerenderTree = observer;
  },

  dispatch(action) {
    if(action.type === ADD_POST) {
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderTree(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderTree(this._state);
    } else if(action.type === ADD_NEW_MSG) {
      const newMsg = {
        id: 4,
        message: this._state.dialogsPage.newMsg,
      };
      this._state.dialogsPage.messagesData.push(newMsg);
      this._state.dialogsPage.newMsg = '';
      this._rerenderTree(this._state);
    } else if(action.type === UPDATE_NEW_MSG) {
      this._state.dialogsPage.newMsg = action.newText;
      this._rerenderTree(this._state);
    }
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
};

export const changePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
};

export default store;