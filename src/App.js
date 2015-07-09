import React, { Component } from 'react';
import Nav from './Nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav menuItems={[{to: '/about', text: 'About'}, {to: '/contact', text: 'Contact'}]}/>
        {this.props.children}
      </div>
    );
  }
}

