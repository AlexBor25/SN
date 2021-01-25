import style from './ProfileInfo.module.css';
import React from "react";

const ProfileData = (props) => {
  return (
    <div>
      <div className={style.info}>
        <div><b>Имя</b>: {props.profile.fullName}</div>
        <div>
          <div>
            <b>Поиск работы:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
          </div>
          {props.profile.lookingForAJob && <div>
            <b>Навыки:</b> {props.profile.lookingForAJobDescription}
          </div>}
          <div>
            <b>Обо мне:</b> {props.profile.aboutMe}
          </div>
          <div>
            <b>Контакты:</b> {Object.keys(props.profile.contacts).map(key =>
            <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)}
          </div>
        </div>
      </div>
      {props.isOwner && <div><button onClick={() => {props.editMode()}}>Редактировать</button></div>}
    </div>
  )
}

export const Contacts = ({contactTitle, contactValue}) => {
  return <div className={style.contacts}>{contactTitle}: {contactValue}</div>
}

export default ProfileData;