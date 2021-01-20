import React from 'react';
import Paginator from "../Paginator/Paginator";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                 totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
      {
        props.users.map(user => <User key={user.id}
                                      user={user}
                                      follow={props.follow}
                                      unfollow={props.unfollow}
                                      disabledBtn={props.disabledBtn}/>)
      }
    </div>
  )
}

export default Users;