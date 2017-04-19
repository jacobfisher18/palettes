import React, { Component } from 'react';
import './App.css';
import palette from '../img/palette_dark.png';

class Create extends Component {

  render() {
    return (
      <div className="Create">
        <div className="create-card">
          <img className="palette-logo" src={palette} alt="logo"/>
        </div>
      </div>
    );
  }
}

export default Create;
