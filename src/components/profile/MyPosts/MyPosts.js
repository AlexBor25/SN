import Post from "./Post/Post";
import style from './MyPosts.module.css';

function MyPosts(props) {

  const postElements = props.posts
    .map(post => <Post postMessage={post.message} likesCount={post.likesCount} />);

  return (
      <div className={style.posts}>
        <div>
          <h3>Add New Post</h3>
          <div>
            <input type="text"/>
          </div>
          <button>Add Post</button>
        </div>
        <h3 className={style.title}>My posts</h3>
        <div>
          {postElements}
        </div>
      </div>
  )
}

export default MyPosts;