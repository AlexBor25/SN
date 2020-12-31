import React from 'react';
import style from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const pages = [];

    for(let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {pages.map(page => {
         return <button onClick={() => {this.onPageChanged(page)}} className={this.props.currentPage === page && style.active}>
           {page}
         </button>})}
        {
          this.props.users.map(user => <div key={user.id}>
          <div>
            <img className={style.avatar} src={user.photos.small || userPhoto} alt="logo"/>
          </div>
          <div>
            {user.followed
              ? <button onClick={ () => {this.props.unfollow(user.id)} }>Отписаться</button>
              : <button onClick={() => {this.props.follow(user.id)}}>Подписаться</button>
            }
          </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>)
        }
      </div>
    )
  }
}

export default Users;