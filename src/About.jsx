import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
