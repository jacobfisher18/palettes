import React, { Component } from 'react';
import './App.css';
import PaletteCard from './PaletteCard.js';

class Explore extends Component {

  renderPaletteCards() {

    const cards = this.props.paletteData.map((card, index) =>
      <PaletteCard
        key={index}
        data={card}
      />
    );

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
