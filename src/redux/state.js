import {rerenderTree} from "../render";

const state = {
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
};

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

export const addNewMsg = () => {
  const newMsg = {
    id: 4,
    message: state.dialogsPage.newMsg,
  };

  state.dialogsPage.messagesData.push(newMsg);
  state.dialogsPage.newMsg = '';
  rerenderTree(state);
};

export const updateNewMsg = (newText) => {
  state.dialogsPage.newMsg = newText;
  rerenderTree(state);
}

export default state;