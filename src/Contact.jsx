import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
