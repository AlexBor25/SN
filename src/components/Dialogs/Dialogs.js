import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props) {

  const dialogsElements = props.dialogs.dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} /> );

  const messagesElements = props.dialogs.messagesData
<<<<<<< HEAD
    .map(message => <Message dialogMessage={message.message}
        addNewMsg={props.addNewMsg}
        updateNewMsg={props.updateNewMsg} />);
=======
    .map(message => <Message dialogMessage={message.message}/>);
>>>>>>> ca25837e2c1584e7a04fd17e3b067b51ef460af2

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