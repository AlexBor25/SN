import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../FormControls/FormsControls";


const Dialogs = (props) => {
  const dialogsElements = props.dialogs.dialogsData
    .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img} /> );

  const messagesElements = props.dialogs.messagesData
    .map(message => <Message dialogMessage={message.message} key={message.id} />);

  if (!props.isAuth) return <Redirect to={'/login'} />

  const addNewMessage = (values) => {
    props.addNewMsg(values.newMessage);
  }

  const AddMessageReduxForm = reduxForm({
    form: 'addDialogMsg'
  })(AddMessageForm);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newMessage' component={Input} type="text"
               validate={[required]}/>
      </div>
      <div>
        <button>Send msg</button>
      </div>
    </form>
  );
};

export default Dialogs;