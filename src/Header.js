import React, { Component } from 'react';
import './App.css';

import explore from '../img/explore_dark.png';
import profile from '../img/profile_dark.png';
import create from '../img/create_dark.png';

class Header extends Component {

  render() {

    var icon;
    var header_title;
    var subtitle;

    if (this.props.type === "explore") {
      icon = explore;
      header_title = "Explore";
      subtitle = "great palettes created by other users";
    }

    else if (this.props.type === "profile") {
      icon = profile;
      header_title = "Profile";

      var numPalettes = this.props.profilePalettes.length;
      var numColors = 0;

      for (var i = 0; i < numPalettes; i++) {
        numColors += this.props.profilePalettes[i].colors.length;
      }

      subtitle = `${numPalettes} palettes, ${numColors} colors`;
    }

    else if (this.props.type === "create") {
      icon = create;
      header_title = "Create";
      subtitle = "create a new palette";
    }

    return (
      <div className="Header">
        <img src={icon} alt="section icon"/>
        <div>
          <h1>{header_title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Header;
