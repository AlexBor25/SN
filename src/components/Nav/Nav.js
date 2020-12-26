import style from './Nav.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";
import React from "react";

const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.hover}>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/news">News</NavLink>
      </div>
      <div className={style.hover}>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/profile">Profile</NavLink>
      </div>
      <div className={style.hover}>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/dialogs">Messages</NavLink>
      </div>
      <div className={style.hover}>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/settings">Settings</NavLink>
      </div>
      <div>
        <h2 className={style.fz}>Friends</h2>
        <FriendsContainer/>
      </div>
    </nav>
  );
};

export default Nav;