import React from 'react';
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
//style
import style from './sideNavigation.css'

const SideNavItems = () => {
  const items = [
    {
      type: style.option,
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: style.option,
      icon: 'file-text-o',
      text: 'News',
      link: '/news'
    },
    {
      type: style.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      type: style.option,
      icon: 'sign-in',
      text: 'Sign-in',
      link: '/sign-in'
    },
    {
      type: style.option,
      icon: 'sign-out',
      text: 'Sign-out',
      link: '/sign-out'
    },
  ]

  const showItems = () => {
    return (
      items.map((item, index) => (
        <div key={index} className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      ))
    )
  }
  return (
    <div>
      {showItems()}
    </div>
  );
};

export default SideNavItems;


//const items = ['Home', 'News', 'Videos']
//items={items}
// itemStyle = { itemStyle }
// title = ''
