import style from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/logo192.png';

const Header = (props) => {
  return (
    <header className={style.header}>
      <NavLink to={'/profile'}>
        <img className={style.logo} src={logo} alt="logo"/>
      </NavLink>
      <div className={style.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
          : <NavLink to={'/login'}>Войти</NavLink>}
      </div>
    </header>
  );
};

export default Header;