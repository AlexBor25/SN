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
          <Post postMessage="Начал учить Реакт" likeCount="15"/>
          <Post postMessage="Скоро собираюсь на собес" likeCount="10"/>
        </div>
      </div>
  )
}

export default MyPosts;