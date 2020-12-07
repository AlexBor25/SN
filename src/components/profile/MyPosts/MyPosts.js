import style from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
  return (
      <div>
        My posts
        <div>
          <div>Add New Post</div>
          <div>
            <input type="text"/>
          </div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
        <div>
          <Post />
          <Post />
        </div>
      </div>
  )
}

export default MyPosts;