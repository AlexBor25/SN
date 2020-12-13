import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  {name: 'Дима', id: '1'},
  {name: 'Вася', id: '2'},
  {name: 'Степан', id: '3'},
];

const messagesData = [
  {message: 'Привет', id: 1},
  {message: 'Да круто, давай топи', id: 2},
  {message: 'А потом меня научишь?', id: 3},
];

const postData = [
  {message: 'Начал учить Реакт', id: 1, likesCount: 15},
  {message: 'Скоро собираюсь на собес', id: 2, likesCount: 10},
];

ReactDOM.render(
  <React.StrictMode>
    <App post={postData} message={messagesData} dialogs={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
