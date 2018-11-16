// import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       hue: 0,
//       saturation: 0,
//       lightness: 0
//     }
//   }
//   changeHue = event => {
//     this.setState({
//       hue: event.target.value
//     })
//   }
//   changeSaturation = event => {
//     this.setState({
//       saturation: event.target.value
//     })
//   }
//   changeLightness = event => {
//     this.setState({
//       lightness: event.target.value
//     })
//   }
//   render() {
//     let color = `hsl(${this.state.hue},${this.state.saturation}%,${
//       this.state.lightness
//     }%)`
//     return (
//       <div class="main">
//         <h1>Exploring Colors</h1>
//         <ul>
//           <li>
//             <label>H </label>
//             <input
//               type="range"
//               min="0"
//               max="360"
//               value={this.state.hue}
//               change={this.changeHue}
//             />
//           </li>
//           <li>
//             <label>S </label>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={this.state.saturation}
//               change={this.changeSaturation}
//             />
//           </li>
//           <li>
//             <label>L </label>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={this.state.lightness}
//               change={this.changeLightness}
//             />
//           </li>
//           <p>{color}</p>
//         </ul>
//         <div
//           className="color-picker"
//           style={{
//             backgroundColor: color
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default App

//Header
//Hue
//Saturation
//Lightness
//The levels need to be adjustable
//Dislay color on screen
//Display the color numbers on screen
//Hook up state
//
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
        <h1>Exploring Colors</h1>
        <ul>
          <li>
            <label>H </label>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.changeHue}
            />
          </li>
          <li>
            <label>S </label>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.changeSaturation}
            />
          </li>
          <li>
            <label>L </label>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.changeLightness}
            />
          </li>
        </ul>
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
