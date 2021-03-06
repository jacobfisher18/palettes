import React, { Component } from 'react';
import './App.css';
import palette from '../img/palette_dark.png';

class PaletteCard extends Component {

  constructor(props) {
    super(props);

    this.renderColors = this.renderColors.bind(this);
  }

  renderColors() {

    const colors = this.props.data["colors"].map((color, index) =>
      <div style={{backgroundColor: color}} key={index}>
        <span className="color-tooltip">{color}</span>
      </div>
    );

    return colors;
  }

  render() {
    return (
      <div className="PaletteCard">
        <img className="palette-logo" src={palette} alt="logo"/>
        <h3 className="palette-title">{this.props.data["title"]}</h3>
        <p className="palette-author"><span className="by">by</span> {this.props.data["author"]}<span className="dateAndTime">{this.props.data["date"]} {this.props.data["time"]}</span></p>
        <div className="colors">
          {this.renderColors()}
        </div>
      </div>
    );
  }
}

export default PaletteCard;
