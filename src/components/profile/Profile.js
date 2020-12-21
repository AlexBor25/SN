import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
<<<<<<< HEAD
      <MyPosts
        posts={props.posts.postData}
        addPost={props.addPost}
        newPostText={props.posts.newPostText}
        updateNewPostText={props.updateNewPostText}/>
=======
      <MyPosts posts={props.posts.postData}/>
>>>>>>> ca25837e2c1584e7a04fd17e3b067b51ef460af2
    </div>
  );
};

export default Profile;