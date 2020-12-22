import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts.postData}
        addPost={props.addPost}
        newPostText={props.posts.newPostText}
        updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;