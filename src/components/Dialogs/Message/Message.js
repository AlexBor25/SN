import style from './../Dialogs.module.css';
import React from 'react';

function Message(props) {

  const inpValue = React.createRef();

  const addNewMsg = () => {
    props.dispatch({type: 'ADD-NEW-MSG'});
  };

  const updateNewMsg = () => {
    let msg = inpValue.current.value;
    props.dispatch({type: 'UPDATE-NEW-MSG', newText: msg});
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