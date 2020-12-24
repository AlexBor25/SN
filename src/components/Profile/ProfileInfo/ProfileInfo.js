import style from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img className={style.background} src="https://www.ixbt.com/img/n1/news/2020/5/1/15.06_large.jpg" alt=""/>
      </div>
      <div className={style.descr}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo;