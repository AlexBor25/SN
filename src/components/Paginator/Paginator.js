import React, {useState} from 'react';
import style from './Paginator.module.css';
import cn from "classnames";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  const pageCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pageCount / portionSize);

  const [portionNum, setPortionNum] = useState(1);

  const prevPortionPageNum = (portionNum - 1) * portionSize + 1;

  const nextPortionPageNum = portionNum * portionSize;

  return (
    <div className={style.paginator}>
      {portionNum > 1 &&
      <button onClick={() => {
        setPortionNum(portionNum - 1)
      }}>PREV</button>}
      {pages
        .filter(page => page >= prevPortionPageNum && page <= nextPortionPageNum)
        .map((page) => {
          return <button className={cn({
            [style.selectedPage]: currentPage === page
          }, style.pageNumber)}
                       key={page}
                       onClick={() => {
                         onPageChanged(page);
                       }}>{page}</button>
        })}
      {
        portionCount > portionNum &&
        <button onClick={() => {
          setPortionNum(portionNum + 1)
        }}>NEXT</button>
      }
    </div>
  )
}

export default Paginator;