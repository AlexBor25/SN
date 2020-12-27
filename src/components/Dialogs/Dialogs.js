import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  const dialogsElements = props.dialogs.dialogsData
    .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img} /> );

  const messagesElements = props.dialogs.messagesData
    .map(message => <Message dialogMessage={message.message} key={message.id} />);

  const inpValue = React.createRef();

  const addNewMsg = () => {
    props.addNewMsg();
  };

  const updateNewMsg = () => {
    let msg = inpValue.current.value;
    props.updateNewMsg(msg);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <div>
          <input ref={inpValue} type="text" onChange={updateNewMsg} value={props.dialogs.newMsg} />
          <button onClick={addNewMsg}>Send msg</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;