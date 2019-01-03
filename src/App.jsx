import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';

class App extends Component {
  render() {
    return (

      <div className="App-header">

      < Counter from={3} max={10}/>
      < Counter amount={5}/>
      < Counter amount={10}/>
      < Counter from={0}/>
      </div>
    );
  }
}

export default App;
