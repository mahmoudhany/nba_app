import React from 'react';
import Slick from 'react-slick'
import { Link } from 'react-router-dom'

//style
import style from './sliderTemplates.css'

const SliderTemplates = (props) => {
  let template = null;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  }

  switch (props.type) {
    case 'articles':
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div className={style.featured_img}>
                <img src={`../images/articles/${item.image}`} alt="" />
              </div>
              <Link to={`/articles/${item.id}`}>
                <div className={style.featured_title}>{item.title}</div>
              </Link>
            </div>
          </div>
        )
      })
      break;

    default:
      template = null
      break;
  }
  return (
    <Slick data-slick={settings}>
      {template}
    </Slick>
  );
};

export default SliderTemplates;
