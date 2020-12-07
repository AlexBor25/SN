import style from "./Posts.module.css";

function Post() {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M61RWYwwUROL8h9uwEM53mx-owmYwcWT5g&usqp=CAU" alt=""/>
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;