import Post from "./Post/Post";
import style from './MyPosts.module.css';

function MyPosts(props) {

  const postElements = props.posts
    .map(post => <Post postMessage={post.message} likesCount={post.likesCount} />);

  return (
      <div className={style.posts}>
        <div>
          <h3>Add New Post</h3>
          <div className={style.newPost}>
            <input type="text" placeholder="Что у вас нового?"/>
            <button>Add Post</button>
          </div>
        </div>
        <h3 className={style.title}>My posts</h3>
        <div>
          {postElements}
        </div>
      </div>
  );
};

export default MyPosts;