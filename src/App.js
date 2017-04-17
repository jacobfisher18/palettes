import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import logo from '../img/palette.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "profile"
    };

    this.handleSectionSelect = this.handleSectionSelect.bind(this);
  }

  handleSectionSelect(newType) {
    this.setState({
      type: newType
    });
  }

  render() {
    return (
      <div className="App">
        <img className="palette-logo" src={logo} alt="logo"/>
        <Menu type={this.state.type} handler={this.handleSectionSelect}/>
        <Header type={this.state.type}/>
      </div>
    );
  }
}

export default App;
