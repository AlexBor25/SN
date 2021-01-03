import style from './ProfileInfo.module.css';
import React from "react";
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={style.background} src="https://www.ixbt.com/img/n1/news/2020/5/1/15.06_large.jpg" alt=""/>
      </div>
      <div className={style.content}>
        <div className={style.photo}>
          <img src={props.profile.photos.large} alt="back"/>
        </div>
        <div className={style.info}>
          <div>Name: {props.profile.fullName}</div>
          <div>Status: {props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;