import Post from "./Post/Post";
import style from './MyPosts.module.css';
import React from 'react';

function MyPosts(props) {

  const postElements = props.posts
    .map(post => <Post postMessage={post.message} likesCount={post.likesCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const inpValue = newPostElement.current.value;
    props.updateNewPostText(inpValue);
  };

  return (
      <div className={style.posts}>
        <div>
          <h3>Add New Post</h3>
          <div className={style.newPost}>
            <input onChange={onPostChange}
                   ref={newPostElement} type="text"
                   placeholder="Что у вас нового?"
                   value={props.newPostText}/>
            <button onClick={addPost}>Add Post</button>
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