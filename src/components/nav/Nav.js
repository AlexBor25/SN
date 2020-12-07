import style from './Nav.module.css';

function Nav() {
  return (
    <nav className={style.nav}>
      <div>
        <a className={style.item} href="#">Profile</a>
      </div>
      <div>
        <a className={style.item} href="#">Messages</a>
      </div>
    </nav>
  )
}

export default Nav;