import style from "./Posts.module.css";
import React from "react";

const Post = (props) => {
  return (
    <div className={style.mt15}>
      <img className={style.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M61RWYwwUROL8h9uwEM53mx-owmYwcWT5g&usqp=CAU" alt=""/>
      {props.postMessage}
      <div>
        <span>
          <img className={style.like} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzRsXJbq6Txirc5WX0dRjjGgiBds8AFvO7g&usqp=CAU" alt=""/>
          {props.likesCount}
        </span>
      </div>
    </div>
  );
};

export default Post;