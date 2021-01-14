const ADD_NEW_MSG = 'ADD-NEW-MSG';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MSG:
      const text = action.newMessage;
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 6, message: text}]
      };
    default:
      return state;
  }
};

export const addMsgAction = (newMessage) => ({type: ADD_NEW_MSG, newMessage});

export default dialogsReducer;