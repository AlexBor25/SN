import style from './../Dialogs.module.css';


function Message(props) {
  return <div className={style.message}>{props.dialogMessage}</div>
};


export default Message;