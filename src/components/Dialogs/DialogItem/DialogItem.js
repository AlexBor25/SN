import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;

  return (
  <div className={style.mt}>
      <NavLink className={style.item} to={path}>
        <div className={style.center}>
          <img className={style.avatars} src={props.img} alt="avatar"/>
        </div>
        <div>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;