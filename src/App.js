import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import logo from '../img/palette.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      type: "explore"
    };
  }

  handleSectionSelect(newSection) {
    this.setState({
      type: newSection
    });
  }

  render() {
    return (
      <div className="App">
        <img className="palette-logo" src={logo} alt="logo"/>
        <Menu selectMethod={this.handleSectionSelect} type={this.state.type}/>
        <Header type={this.state.type}/>
      </div>
    );
  }
}

export default App;
