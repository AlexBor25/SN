import React from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>{pages.map((page, index) => <button key={index} onClick={() => {
        props.onPageChanged(page)
      }} className={(props.currentPage === page && style.active).toString()}>
        {page}
      </button>
    )}
    </div>
  )
}

export default Paginator;