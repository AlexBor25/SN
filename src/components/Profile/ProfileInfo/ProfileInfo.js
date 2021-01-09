import style from './ProfileInfo.module.css';
import React from "react";
import Preloader from "../../Preloader/Preloader";
import userPhoto from '../../../assets/img/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={style.content}>
        <div className={style.photo}>
          <img src={props.profile.photos.large || userPhoto}  alt="back"/>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={style.info}>
          <div>Name: {props.profile.fullName}</div>
          {/*<div>Status: {props.profile.lookingForAJobDescription}</div>*/}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;