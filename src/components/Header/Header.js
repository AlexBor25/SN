import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} src="https://www.handmadeschool.ru/uploads/posts/2016-08/1470233229_snimok-ekrana-2015-03-19-v-13.03.39.png" alt=""/>
    </header>
  );
};

export default Header;