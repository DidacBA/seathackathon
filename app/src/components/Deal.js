import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Deal extends Component {

  state = {
    redirect: false,
  }

  setRedirect = (e) => {
    this.setState({
      redirect: true,
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div className="deal">
        {this.renderRedirect()}
        <h1>Buyer Name</h1>
        <div className="deal-container">
          <p>{this.props.price}</p>
          <p>{this.props.expectedTime}</p>
        </div>
        <div className="deal-buttons-container">
          <button onClick={ () => {
            this.props.acceptDeal();
            this.setRedirect();
          }}>Accept</button>
          <button onClick={this.setRedirect} >Reject</button>
        </div>
      </div>
    )
  }
}
