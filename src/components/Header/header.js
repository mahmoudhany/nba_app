import React from 'react';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

// components
import SideNavigation from './SideNav/sideNavigation'
//style
import style from './header.css'

const header = (props) => {

  const logo = () => (
    <Link to='/' className={style.logo}>
      <img src="/images/nba_logo.png" alt="Logo" />
    </Link>
  )
  const navBars = () => (
    <div className={style.bars} >
      <FontAwesome
        onClick={props.onOpenNav}
        name='bars'
        className={style.icon}
      />
    </div>
  )


  return (
    <header className={style.header}>
      <SideNavigation {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default header;
