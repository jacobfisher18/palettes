import React, { Component } from 'react';
import './App.css';

import explore from '../img/explore_medium.png';
import profile from '../img/profile_medium.png';
import create from '../img/create_medium.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    };
  }

  handleSectionSelect(type) {
    this.props.handler(type);
  }

  render() {
    return (
      <div className="menu">
        <div className="MenuSection explore" onClick={this.handleSectionSelect.bind(this, "explore")}>
          <img src={explore} alt="logo"/>
          <p>explore</p>
        </div>
        <div className="MenuSection profile" onClick={this.handleSectionSelect.bind(this, "profile")}>
          <img src={profile} alt="logo"/>
          <p>profile</p>
        </div>
        <div className="MenuSection create" onClick={this.handleSectionSelect.bind(this, "create")}>
          <img src={create} alt="logo"/>
          <p>create</p>
        </div>
      </div>
    );
  }
}

export default Menu;
