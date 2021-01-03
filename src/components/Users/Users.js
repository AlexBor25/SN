import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>{pages.map(page => {
        return <button key={page.id} onClick={() => {
          props.onPageChanged(page)
        }} className={(props.currentPage === page && style.active).toString()}>
          {page}
        </button>
      })}
      </div>
      {
        props.users.map(user => <div key={user.id}>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img className={style.avatar} src={user.photos.small || userPhoto} alt="logo"/>
            </NavLink>
          </div>
          <div>
            {user.followed
              ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Отписаться</button>
              : <button onClick={() => {
                props.follow(user.id)
              }}>Подписаться</button>
            }
          </div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>)
      }
    </div>
  )
}

export default Users;