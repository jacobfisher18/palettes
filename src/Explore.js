import React, { Component } from 'react';
import './App.css';
import PaletteCard from './PaletteCard.js';

class Explore extends Component {

  renderPaletteCards() {

    var cards = [];
    for (var i = 0; i < this.props.paletteData.length; i++) {
      cards.push(<PaletteCard data={this.props.paletteData[i]}/>);
    }

    return cards;
  }

  render() {
    return (
      <div className="Explore">
        {this.renderPaletteCards()}
      </div>
    );
  }
}

export default Explore;
