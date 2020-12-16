import style from './../Dialogs.module.css';


function Message(props) {
  return (
    <div className={style.message}>
      {props.dialogMessage}
      <div>
        <div className={style.center}>Me:</div>
        <div className={style.fe}>Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  );
};


export default Message;