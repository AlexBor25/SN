import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


function DialogItem(props) {
  const path = '/dialogs/' + props.id;

  return (
  <div className={style.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

export default DialogItem;