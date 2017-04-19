import React, { Component } from 'react';
import './App.css';
import palette from '../img/palette_dark.png';

class PaletteCard extends Component {

  constructor(props) {
    super(props);

    this.renderColors = this.renderColors.bind(this);
  }

  renderColors() {
    return (
      <div className="colors">
          <div style={{backgroundColor: "maroon"}} />
          <div style={{backgroundColor: "orange"}} />
          <div style={{backgroundColor: "sunflower"}} />
          <div style={{backgroundColor: "green"}} />
          <div style={{backgroundColor: "teal"}} />
          <div style={{backgroundColor: "violet"}} />
      </div>
    );
  }

  render() {
    return (
      <div className="PaletteCard">
        <img className="palette-logo" src={palette} alt="logo"/>
        <h3 className="palette-title">Summer Set</h3>
        <p className="palette-author"><span className="by">by</span> jfish597 <span className="dateAndTime">11/23/17 11:49PM</span></p>
        {this.renderColors()}
      </div>
    );
  }
}

export default PaletteCard;
