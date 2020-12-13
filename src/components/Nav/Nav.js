import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/news">News</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.activeLink} to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}

export default Nav;