import React, { Component } from 'react';
import './App.css';

import explore from '../img/explore_medium.png';
import profile from '../img/profile_medium.png';
import create from '../img/create_medium.png';

class Menu extends Component {

  handleSectionSelect(type) {
    this.props.handler(type);
  }

  render() {

    var exploreClass = "MenuSection explore";
    var profileClass = "MenuSection profile";
    var createClass = "MenuSection create";
    if (this.props.type === "explore") {exploreClass += " selected";}
    else if (this.props.type === "profile") {profileClass += " selected";}
    else {createClass += " selected";}
    return (
      <div className="menu">
        <div className={exploreClass} onClick={this.handleSectionSelect.bind(this, "explore")}>
          <img src={explore} alt="logo"/>
          <p>explore</p>
        </div>
        <div className={profileClass} onClick={this.handleSectionSelect.bind(this, "profile")}>
          <img src={profile} alt="logo"/>
          <p>profile</p>
        </div>
        <div className={createClass} onClick={this.handleSectionSelect.bind(this, "create")}>
          <img src={create} alt="logo"/>
          <p>create</p>
        </div>
      </div>
    );
  }
}

export default Menu;
