import React, { Component } from 'react';

// style
import '../layout/layout.css'

// components
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

class Layout extends Component {
  state = {
    showNav: false
  }

  toggleSideNav = (action) => {
    this.setState({
      showNav: action
    })
  }

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
