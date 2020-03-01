import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  };


  render() {
    return (
      <div className="App">
        <MyComponent/>
      </div>
      
    );
  }
}

export default App;
