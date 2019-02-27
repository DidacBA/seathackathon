import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Deal from './components/Deal';
import Profile from './components/Profile';
import Homepage from './components/Homepage';
import Battery from './components/Battery';

class App extends Component {

  state = {
    userState: 'off',
  }

  handleSell = () => {
    // Server Call to send status to server
    const newState = 'sell';
    this.setState({
      userState: newState,
    })
  }

  handleOff = () => {
    // Server Call to send status to server
    const newState = 'off';
    this.setState({
      userState: newState,
    })
  }

  handleBuy = () => {
    // Server Call to send status to server
    const newState = 'buy';
    this.setState({
      userState: newState,
    })
  }

  handleCancel = () => {
    // Server Call to send status to server
    const newState = 'off';
    this.setState({
      userState: newState,
    })
  }

  acceptDeal = () => {
    // Server Call to send deal acceptance to our servers
    const newUserState = 'on';
    this.setState({
      userState: newUserState,
    })
  }

  render() {
    return (
      <div className="App">
        < Navbar />
        < Switch >
          < Route exact path="/" render={(props) =>
            < Homepage {...props} 
              userState={ this.state.userState }
              handleSell={this.handleSell}
              handleBuy={this.handleBuy}
              handleOff={this.handleOff} />
          }/>
          < Route exact path="/deal" render={(props) => < Deal {...props} acceptDeal={this.acceptDeal} />
          } />
          < Route exact path="/profile" render={(props) => 
            < Profile {...props} />
          } />
          < Route exact path="/battery" render={(props) => 
            < Battery {...props} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
