import './index.css';
<<<<<<< HEAD
import {rerenderTree} from "./render";
import state from "./redux/state";


rerenderTree(state);
=======
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";



ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> ca25837e2c1584e7a04fd17e3b067b51ef460af2
