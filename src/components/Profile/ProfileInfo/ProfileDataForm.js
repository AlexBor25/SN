import style from './ProfileInfo.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.info}>
        <div><b>Имя</b>: <div>
          <Field component={Input} validate={[required]} name='fullName'
                 placeholder='Введите имя' type="text"/>
        </div></div>
        <div>
          <div>
            <b>Поиск работы:</b> <div>
            <Field component={Input} name='lookingForAJob' type="checkbox"/>
          </div>
          </div>
          <div>
            <b>Навыки:</b> <div>
            <Field component={Input} name='lookingForAJobDescription'
                   placeholder='Опишите свои навыки' type="text"/>
          </div>
          </div>
          <div>
            <b>Обо мне:</b> <div>
            <Field component={Input} name='aboutMe'
                   placeholder='Напишите немного о себе' type="text"/>
          </div>
          </div>
          <div>
            <b>Контакты:</b> {Object.keys(props.profile.contacts).map(key =>
            <div className={style.contacts} key={key}>{key} : <div>
              <Field component={Input} name={'contacts.' + key}
                     placeholder={key} type="text"/>
            </div> </div>)}
          </div>
        </div>
      </div>
      <div><button>Сохранить</button></div>
    </form>
  )
}

export const ProfileDataFormRedux = reduxForm({
  form: 'ProfileDataForm'
})(ProfileDataForm)