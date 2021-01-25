import style from './ProfileInfo.module.css';
import React, {useState} from "react";
import Preloader from "../../Preloader/Preloader";
import userPhoto from '../../../assets/img/user.png'
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import {ProfileDataFormRedux} from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if(!props.profile) {
    return <Preloader />
  }

  const loadPhoto = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }

  return (
    <div>
      <div className={style.content}>
        <div className={style.photoBlock}>
          <div className={style.photo} ><img src={props.profile.photos.large || userPhoto}  alt="Avatar"/></div>
          <div className={style.hover}>{props.isOwner && <input type='file' onChange={loadPhoto}/>}</div>
          <b>Статус :</b><ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        {editMode
          ? <ProfileDataFormRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
          : <ProfileData profile={props.profile} isOwner={props.isOwner}
                         editMode={() => {setEditMode(true)}}/>
        }
      </div>
    </div>
  )
}

export default ProfileInfo;