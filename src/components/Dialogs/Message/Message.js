import style from './../Dialogs.module.css';
import React from 'react';

function Message(props) {
<<<<<<< HEAD

  const inpValue = React.createRef();

  const addNewMsg = () => {
    props.addNewMsg();
  };

  const updateNewMsg = () => {
    let msg = inpValue.current.value;
    props.updateNewMsg(msg);
  }

=======
>>>>>>> ca25837e2c1584e7a04fd17e3b067b51ef460af2
  return (
    <div className={style.message}>
      {props.dialogMessage}
      <div>
        <div className={style.center}>Me:</div>
        <div className={style.fe}>Lorem ipsum dolor sit amet.</div>
<<<<<<< HEAD
        <input ref={inpValue} type="text" onChange={updateNewMsg} />
        <button onClick={addNewMsg}>Send msg</button>
=======
>>>>>>> ca25837e2c1584e7a04fd17e3b067b51ef460af2
      </div>
    </div>
  );
};


export default Message;