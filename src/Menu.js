import React, { Component } from 'react';
import './App.css';
import MenuSection from './MenuSection.js';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    };
  }

  onSectionSelect(newSection) {
    alert("test");
    this.props.selectMethod(newSection);
    if (newSection === 0) {
      this.setState({type: "explore"});
    }

    else if (newSection === 1) {
      this.setState({type: "profile"});
    }

    else if (newSection === 2) {
      this.setState({type: "create"});
    }

  }

  render() {
    var exploreSelected = false;
    var profileSelected = false;
    var createSelected = false;

    if (this.state.type == "explore") {
      exploreSelected = true;
    }

    else if (this.state.type == "profile") {
      profileSelected = true;
    }

    else if (this.state.type == "create") {
      createSelected = true;
    }

    return (
      <div className="Menu">
        <MenuSection type="explore" selected={exploreSelected} onClick={this.onSectionSelect.bind(this, 0)}/>
        <MenuSection type="profile" selected={profileSelected} onClick={this.onSectionSelect.bind(this, 1)}/>
        <MenuSection type="create" selected={createSelected} onClick={this.onSectionSelect.bind(this, 2)}/>
      </div>
    );
  }
}

export default Menu;
