import style from './../Dialogs.module.css';
import React from 'react';

const Message = (props) => {
  return (
    <div className={style.message}>
      {props.dialogMessage}
    </div>
  );
};


export default Message;