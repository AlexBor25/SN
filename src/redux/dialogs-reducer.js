const ADD_NEW_MSG = 'ADD-NEW-MSG';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';


const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MSG:
      const newMsgText = {
        id: 4,
        message: state.newMsg,
      };
      state.messagesData.push(newMsgText);
      state.newMsg = '';
      return state;
    case UPDATE_NEW_MSG:
      state.newMsg = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMsgActionCreator = () => {
  return {
    type: ADD_NEW_MSG,
  }
};

export const updateMsgActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MSG,
    newText: text,
  }
};

export default dialogsReducer;