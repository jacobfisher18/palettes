import React, { Component } from 'react';
import './App.css';
import PaletteCard from './PaletteCard.js';

class Profile extends Component {

  renderPaletteCards() {

    var cards = [];
    for (var i = 0; i < this.props.paletteData.length; i++) {
      cards.push(<PaletteCard data={this.props.paletteData[i]}/>);
    }

    return cards;
  }

  render() {
    return (
      <div className="Profile">
        {this.renderPaletteCards()}
      </div>
    );
  }
}

export default Profile;
