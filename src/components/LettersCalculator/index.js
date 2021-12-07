// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  countChar = event => {
    const char = event.target.value.toString()
    this.setState({count: char.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
        <div className="box-2">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="inputEl">
            Enter the phrase
          </label>
          <br />
          <input
            onChange={this.countChar}
            placeholder="Enter the phrase"
            className="inputEl"
            type="text"
            id="inputEl"
          />
          <h1 className="output">No.of letters: {count}</h1>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
