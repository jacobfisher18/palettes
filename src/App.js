import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import Explore from './Explore.js';
import Profile from './Profile.js';
import Create from './Create.js';
import logo from '../img/palette.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "explore"
    };

    this.handleSectionSelect = this.handleSectionSelect.bind(this);
    this.renderSection = this.renderSection.bind(this);
  }

  handleSectionSelect(newType) {
    this.setState({
      type: newType
    });
  }

  renderSection() {
    if (this.state.type === "explore") {
      //return explore section
      return <Explore />;
    }

    else if (this.state.type === "profile") {
      //return profile section
      return <Profile />;
    }

    else {
      //return create section
      return <Create />;
    }
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="logo"/>
        <Menu type={this.state.type} handler={this.handleSectionSelect}/>
        <Header type={this.state.type}/>
        {this.renderSection()}
      </div>
    );
  }
}

export default App;
