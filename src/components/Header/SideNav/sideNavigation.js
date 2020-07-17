import React from 'react';
import SideNav from 'react-simple-sidenav'
// components
import SideNavItems from './sideNavItem'
// style
// import Style from './sideNavigation.css'

const SideNavigation = (props) => {
  const itemStyle = {
    background: 'none',
    listStyle: 'none',
    color: '#fff'
  }

  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px'
        }}
        itemStyle={itemStyle}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};

export default SideNavigation;
