import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/profile">Profile</Link>
        <span>Logo</span>
        <Link to="/battery">Battery</Link>
      </nav>
    )
  }
}
