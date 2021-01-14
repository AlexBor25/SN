import React from "react";
import style from './FormsControls.module.css';

export const Input = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? style.error : ''}>
      <input type="text" {...input} {...props}/>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  )
}