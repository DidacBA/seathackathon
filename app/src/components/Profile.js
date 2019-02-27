import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Profile extends Component {

  state = {
    cashBalance: null,
  }

  componentDidMount() {
    // Call to our server (that we do not have)
    this.setState({
      username: 'Donald Trump',
      cashBalance: 10,
    })
  }

  render() {
    return (
      <div className="profile">
        <img src="" alt="profile-pic"/>
        <h1>{this.state.username}</h1>
        <p>{this.state.cashBalance} $</p>
        <Link to="/">Go Back</Link>
      </div>
    )
  }
}
