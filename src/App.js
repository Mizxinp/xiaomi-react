import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount(){
    axios.get("goods/goodsList").then(response => {
      console.log('re',response)
      
    });
  }
  render() {
    return (
      <div className="App">
        首页
      </div>
    );
  }
}

export default App;
