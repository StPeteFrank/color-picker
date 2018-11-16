import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hue: 0,
      saturation: 0,
      lightness: 0
    }
  }
  changeHue = event => {
    this.setState({
      hue: event.target.value
    })
  }
  changeSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }
  changeLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }
  render() {
    let colorChoice = `HSL(${this.state.hue},${this.state.saturation}%,${
      this.state.lightness
    }%)`
    return (
      <main>
        <h1 class="exploring">
          <span class="char1">E</span>
          <span class="char2">x</span>
          <span class="char3">p</span>
          <span class="char4">l</span>
          <span class="char5">o</span>
          <span class="char6">r</span>
          <span class="char7">i</span>
          <span class="char8">n</span>
          <span class="char9">g</span>
        </h1>
        <div class="block">
          <label>H </label>
          <input
            type="range"
            min="0"
            max="360"
            value={this.state.hue}
            onChange={this.changeHue}
          />
        </div>
        <div class="block">
          <label>S </label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.saturation}
            onChange={this.changeSaturation}
          />
        </div>
        <div class="block">
          <label>L </label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.lightness}
            onChange={this.changeLightness}
          />
        </div>
        <p>{colorChoice}</p>
        <div
          className="colorPicker"
          style={{
            backgroundColor: colorChoice
          }}
        />
      </main>
    )
  }
}

export default App

//Header
//Hue 360
//Saturation 100%
//Lightness 100%
//The levels need to be adjustable
//Display color on screen
//Display the color numbers on screen
//Hook up state
//Design some
