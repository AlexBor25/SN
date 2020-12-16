import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

function Friends(props) {

  const friends = props.friend.friends.map(friend => <FriendItem
    name={friend.name}
    id={friend.id}
    img={friend.img}/>);

  return (
    <div className={style.df}>
      {friends}
    </div>
  );
};

export default Friends;