import React, { Component } from 'react';
import {getLukeSkywalker} from './services/starWars';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      luke: {}
    }
  }

  componentDidMount() {  //this fires once
    getLukeSkywalker().then(luke => {
      this.setState ({
        luke: luke
      })
    })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>HTTP Requests with React</h1>
        </div>

        <h1>{this.state.luke.name}</h1>


      </div>
    );
  }
}

export default App;
