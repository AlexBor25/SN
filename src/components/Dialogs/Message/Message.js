import style from './../Dialogs.module.css';
import React from 'react';

function Message(props) {

  const inpValue = React.createRef();

  const addNewMsg = () => {
    props.addNewMsg();
  };

  const updateNewMsg = () => {
    let msg = inpValue.current.value;
    props.updateNewMsg(msg);
  };

  return (
    <div className={style.message}>
      {props.dialogMessage}
      <div>
        <div className={style.center}>Me:</div>
        <div className={style.fe}>Lorem ipsum dolor sit amet.</div>
        <input ref={inpValue} type="text" onChange={updateNewMsg} />
        <button onClick={addNewMsg}>Send msg</button>
      </div>
    </div>
  );
};


export default Message;