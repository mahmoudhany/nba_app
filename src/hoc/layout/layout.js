import React, { Component } from 'react';
import '../layout/layout.css'
class layout extends Component {
  render() {
    return (
      <div>
        Header
        {this.props.children}
        Footer
      </div>
    );
  }
}

export default layout;
