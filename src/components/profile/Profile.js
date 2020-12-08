import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div>
      <div>
        <img className={style.background} src="https://www.ixbt.com/img/n1/news/2020/5/1/15.06_large.jpg" alt=""/>
      </div>
      <div>
        ava + descr
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;