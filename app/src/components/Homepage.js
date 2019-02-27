import React, { Component } from 'react'
import Map from './Map';
import '../styles/homepage.css';

export default class Homepage extends Component {

  render() {
    const { userState } = this.props;
    return (
      <div className="homepage">
        < Map />
        { userState !== 'on' &&
          <div className="buttons-container">
            <button className="button-main" onClick={this.props.handleSell}>Sell</button>
            <button className="button-main" onClick={this.props.handleOff}>Off</button>
            <button className="button-main" onClick={this.props.handleBuy}>Buy</button>
          </div> 
        }
        { userState === 'on' && <button onClick={this.handleCancel}>Cancel</button> }
      </div>
    )
  }
}
