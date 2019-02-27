import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/profile">Profile</Link>
        <span>VCar</span>
        <Link to="/battery">Battery</Link>
      </nav>
    )
  }
}
