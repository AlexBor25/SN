import style from './Nav.module.css';

function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a href="/news">News</a>
      </div>
      <div className={style.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={style.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={style.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  )
}

export default Nav;