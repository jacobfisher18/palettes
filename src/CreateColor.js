import React, { Component } from 'react';
import './App.css';

class CreateColor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  isValid(str) {
    return (/^#[0-9A-F]{6}$/i.test(str) || /^#[0-9A-F]{3}$/i.test(str));
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target.value, this.props.index);

    if (this.isValid(e.target.value)) {
      this.setState({
        valid: true
      })
    }

    else {
      this.setState({
        valid: false
      })
    }

  }

  handleDeleteClick(e) {
    this.props.handleDeleteClick(this.props.index);
  }

  render() {
    var inputColor = "#222222";
    if (!this.state.valid) {
      inputColor = "#EEEEEE";
    }

    return (
      <div className="create-color">
        <div className="create-colorbox" style={{backgroundColor: this.props.color}}/>
        <input className="create-colortext" type="text" value={this.props.color} placeholder={this.props.color} onChange={this.handleInputChange} style={{color: inputColor}}></input>
        <p onClick={this.handleDeleteClick}>x</p>
      </div>
    );
  }
}

export default CreateColor;
