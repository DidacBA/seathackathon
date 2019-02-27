import React, { Component } from 'react'
import Map from './Map';

export default class Homepage extends Component {

  render() {
    const { userState } = this.props;
    return (
      <div className="homepage">
        < Map />
        { userState !== 'on' &&
          <div>
            <button onClick={this.props.handleSell}>Sell</button>
            <button onClick={this.props.handleOff}>Off</button>
            <button onClick={this.props.handleBuy}>Buy</button>
          </div> 
        }
        { userState === 'on' && <button onClick={this.handleCancel}>Cancel</button> }
      </div>
    )
  }
}
