import React from 'react';
// import { Link } from 'react-router-dom'
import style from './button.css'
const Button = (props) => {

  let template = null;
  switch (props.type) {
    case 'loadmore':
      template = (
        <div className={style.blue_button}>
          <button
            onClick={props.loadMore}
          >{props.cta}</button>
        </div>
      )
      break;

    default:
      template = null
      break;
  }
  return template
};

export default Button;
