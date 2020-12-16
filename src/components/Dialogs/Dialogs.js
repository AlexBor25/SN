import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props) {

  const dialogsElements = props.dialogs.dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} /> );

  const messagesElements = props.dialogs.messagesData
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
  );
};

export default Dialogs;