import Post from "./Post/Post";
import style from './MyPosts.module.css';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Input} from "../../FormControls/FormsControls";

const MyPosts = (props) => {

  const AddPostFormRedux = reduxForm({
    form: 'addPost'
  })(AddPostForm);

  const postElements = props.posts
    .map(post => <Post postMessage={post.message} likesCount={post.likesCount} key={post.id} />);

  const onAddPost = (values) => {
    props.addPost(values.addPostMsg);
  };

  return (
      <div className={style.posts}>
        <div>
          <h3>Add New Post</h3>
          <AddPostFormRedux onSubmit={onAddPost}/>
        </div>
        <h3 className={style.title}>My posts</h3>
        <div>
          {postElements}
        </div>
      </div>
  );
};

const maxLength50 = maxLength(50);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newPost}>
      <Field type="text"
             name='addPostMsg'
             component={Input}
             validate={[required, maxLength50]}
             placeholder="Что у вас нового?"/>
      <button>Add Post</button>
    </form>
  );
};



export default MyPosts;