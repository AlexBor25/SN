import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";
import React from "react";

const Friends = (props) => {
  const friends = props.friends.map(friend => <FriendItem
    name={friend.name}
    id={friend.id}
    key={friend.id}
    img={friend.img}/>);

  return (
    <div className={style.df}>
      {friends}
    </div>
  );
};

export default Friends;