import React, { Component } from 'react';
import './App.css';
import PaletteCard from './PaletteCard.js';

class Explore extends Component {

  renderPaletteCards() {
    return (
      <div>
        <PaletteCard />
        <PaletteCard />
        <PaletteCard />
        <PaletteCard />
      </div>
    )
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
