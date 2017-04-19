import React, { Component } from 'react';
import './App.css';
import PaletteCard from './PaletteCard.js';

var paletteData = [
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

class Explore extends Component {

  renderPaletteCards() {

    var cards = [];
    for (var i = 0; i < paletteData.length; i++) {
      cards.push(<PaletteCard data={paletteData[i]}/>);
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
