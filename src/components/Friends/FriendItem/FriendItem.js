import style from './../Friends.module.css';

const FriendItem = (props) => {
  return (
    <div>
      <img className={style.avatars} src={props.img} alt="avatar"/>
      <div>{props.name}</div>
    </div>
  );
};

export default FriendItem;