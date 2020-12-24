const initialState = {
  friends: [
    {id: 1, name: 'Иван', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRK-WsZMGlxQAY7UptKCIm-H5AAhqQWtMbQ&usqp=CAU'},
    {id: 2, name: 'Петя', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHoo7NzeLepVR8gRlWKpJs5L2RlISmPjJbA&usqp=CAU'},
    {id: 3, name: 'Сергей', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyCXGIc_4SfOVk1MlUTkONZXFXvPv-Fcw3Q&usqp=CAU'},
  ]
};

const sidebarReducer = (state = initialState, action) => {

  return state;
};

export default sidebarReducer;