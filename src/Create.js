import React, { Component } from 'react';
import './App.css';
import palette from '../img/palette_dark.png';
import CreateColor from './CreateColor.js';

function getRandColor() {
	var possibleCharacters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	var color = "#";
	for (var i = 0; i < 6; i++) {
		var randNum = Math.floor((Math.random() * 15) + 1);
		color += possibleCharacters[randNum];
	}

	return color;
}

class Create extends Component {

  constructor(props) {
    super(props);

    var initialColors = [];

    //generate five random colors
    for (var i = 0; i < 3; i++) {
      initialColors.push(getRandColor());
    }

    this.state = {
      colors: initialColors,
      title: ""
    };

    this.handleAnotherClick = this.handleAnotherClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  renderColors() {

    const colors = this.state.colors.map((color, index) =>
      <CreateColor
        index={index}
        key={index}
        color={color}
        handleInputChange={this.handleInputChange}
        handleDeleteClick={this.handleDeleteClick}
      />
    );

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

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
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
      colors: this.state.colors.concat(getRandColor())
    });
  }

  handleCreateClick() {
    //create palette based on this.state.colors
    this.props.addPaletteToProfile(this.state.colors, this.state.title);

    //to-do: redirect to profile section
    this.props.redirectToProfile();
  }

  render() {
    return (
      <div className="Create">
        <div className="create-card">
          <img className="palette-logo" src={palette} alt="logo"/>
          <form className="create-form">
            <input className="create-title" type="text" placeholder="Palette Name" value={this.state.color} onChange={this.handleTitleChange}></input>
            <p className="create-author">by jfish597</p>
            {this.renderColors()}
            <div className="another-color" onClick={this.handleAnotherClick}>add color</div>
          </form>
        </div>
        <div className="create-button-card">
          <div className="create-button" onClick={this.handleCreateClick}>create palette</div>
        </div>
      </div>
    );
  }
}

export default Create;
