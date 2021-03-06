import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import Explore from './Explore.js';
import Profile from './Profile.js';
import Create from './Create.js';
import logo from '../img/palette.png';

var exploreData = [
  {
    "title":"Summer Set",
    "author":"jfish597",
    "date":"11/23/17",
    "time":"11:35PM",
    "colors": [
      "#FDFCE9",
      "#FAD9D3",
      "#ECBBBF",
      "#A8ABD1",
      "#6777A1"
    ]
  },
  {
    "title":"Sailboat",
    "author":"jfish597",
    "date":"11/23/17",
    "time":"11:49PM",
    "colors": [
      "#D4DBDB",
      "#EF798A",
      "#247BA0",
      "#FFFB8E"
    ]
  }
]

var profileData = [
  {
    "title":"Grays",
    "author":"jfish597",
    "date":"11/23/17",
    "time":"11:35PM",
    "colors": [
      "#EEEEEE",
      "#CCCCCC",
      "#222222",
      "#000000"
    ]
  }
]

var userData = "jfish0505";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "create",
      explorePalettes: exploreData,
      profilePalettes: profileData,
      currentUser: userData
    };

    this.handleSectionSelect = this.handleSectionSelect.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.addPaletteToProfile = this.addPaletteToProfile.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  handleSectionSelect(newType) {
    this.setState({
      type: newType
    });
  }

  addPaletteToProfile(palette, title) {
    //add palette to this.state.profilePalettes
    var mutable_palettes = this.state.profilePalettes;

    var newPalette = {};

    newPalette.title = title || "Untitled Palette";
    newPalette.author = this.state.currentUser;
    newPalette.colors = palette;

    var now = new Date();
    newPalette.date = `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
    newPalette.time = `${now.getHours() % 12 || 12}:${now.getMinutes()}${(now.getHours() >= 12) ? "PM" : "AM"}`;

    mutable_palettes.push(newPalette);

    this.setState({
      profilePalettes: mutable_palettes
    })
  }

  redirectToProfile() {
    this.setState({
      type: "profile"
    })
    window.scrollTo(0, 0);
  }

  renderSection() {
    if (this.state.type === "explore") {
      //return explore section
      return <Explore paletteData={this.state.explorePalettes}/>;
    }

    else if (this.state.type === "profile") {
      //return profile section
      return <Profile paletteData={this.state.profilePalettes}/>;
    }

    else {
      //return create section
      return <Create addPaletteToProfile={this.addPaletteToProfile} redirectToProfile={this.redirectToProfile}/>;
    }
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="logo"/>
        <Menu type={this.state.type} handler={this.handleSectionSelect}/>
        <Header type={this.state.type} profilePalettes={this.state.profilePalettes}/>
        {this.renderSection()}
      </div>
    );
  }
}

export default App;
