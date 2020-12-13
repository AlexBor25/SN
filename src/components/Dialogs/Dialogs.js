import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props) {

  const dialogsElements = props.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

  const messagesElements = props.messages
    .map(message => <Message dialogMessage={message.message}/>);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;