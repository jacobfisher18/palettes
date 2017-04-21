import React, { Component } from 'react';
import './App.css';
import palette from '../img/palette_dark.png';
import CreateColor from './CreateColor.js';

class Create extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "#ABCDEF",
        "#123456",
        "#000000"
      ]
    };

    this.handleAnotherClick = this.handleAnotherClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  renderColors() {
    var colors = [];

    for (var i = 0; i < this.state.colors.length; i++) {
      colors.push( <CreateColor index={i} color={this.state.colors[i]} handleInputChange={this.handleInputChange} handleDeleteClick={this.handleDeleteClick}/> )
    }

    return colors;
  }

  handleInputChange(val, index) {
    if (val.length < 8) {
      var mutable_colors = this.state.colors;
      mutable_colors[index] = val.toUpperCase();
      this.setState({
        colors: mutable_colors
      })
    }
  }

  handleDeleteClick(index) {
    if (this.state.colors.length > 1) {
      var mutable_colors = this.state.colors;
      mutable_colors.splice(index, 1);
      this.setState({
        colors: mutable_colors
      })
    }
  }

  handleAnotherClick() {
    this.setState({
      colors: this.state.colors.concat("#222222")
    });
  }

  render() {
    return (
      <div className="Create">
        <div className="create-card">
          <img className="palette-logo" src={palette} alt="logo"/>
          <form className="create-form">
            <input className="create-title" type="text" placeholder="Palette Name"></input>
            <p className="create-author">by jfish597</p>
            {this.renderColors()}
            <div className="another-color" onClick={this.handleAnotherClick}>add color</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
