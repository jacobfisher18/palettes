import React, { Component } from 'react';
import './App.css';

import explore from '../img/explore_medium.png';
import profile from '../img/profile_medium.png';
import create from '../img/create_medium.png';

class MenuSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      selected: props.selected
    };
  }

  render() {

    var selectedBar = "";
    if (this.state.selected) {
      selectedBar = React.createElement('div', {className: 'selectedBar'});
    }

    var icon;
    if (this.state.type === "explore") {
      icon = explore;
    }

    else if (this.state.type === "profile") {
      icon = profile;
    }

    else if (this.state.type === "create") {
      icon = create;
    }

    return (
      <div className={"MenuSection " + this.state.type}>
        {selectedBar}
        <img src={icon} alt="logo"/>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default MenuSection;
