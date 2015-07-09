import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.styl';

export default class Nav extends Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedIndex: props.selectedIndex};
  }

  render() {
    return (
      <nav className="NavBar">
        <ul>
          {[this.props.menuItems.map((i) => (<li><Link to={i.to}>{i.text}</Link></li>))]}
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
