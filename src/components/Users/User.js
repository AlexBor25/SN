import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <div>
        <NavLink to={'/profile/' + props.user.id}>
          <img className={style.avatar} src={props.user.photos.small || userPhoto} alt="logo"/>
        </NavLink>
      </div>
      <div>
        {
          props.user.followed
            ? <button disabled={props.disabledBtn.some(id => id === props.user.id)}
                      onClick={() => {
                        props.unfollow(props.user.id);
                      }}>Отписаться</button>
            : <button disabled={props.disabledBtn.some(id => id === props.user.id)}
                      onClick={() => {
                        props.follow(props.user.id);
                      }}>Подписаться</button>
        }
      </div>
      <div>{props.user.name}</div>
      <div>{props.user.status}</div>
    </div>)
}

export default User;