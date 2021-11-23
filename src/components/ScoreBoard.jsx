import React, { Component } from "react";
import "./ScoreBoard.css";
import Button from "./Button";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  decrementScore = () => {
    if (this.state.score > 0) {
      this.setState({
        score: this.state.score - 1,
      });
    }
  };

  clearScore = () => {
    this.setState({
      score: 0,
    });
  };

  render() {
    return (
      <div className={"score-board-container"}>
        <h1>Scoreboard for the {this.props.teamName}!</h1>
        <h2>Score: {this.state.score}</h2>
        <div className={"button-container"}>
          <Button
            buttonText="+"
            buttonStyle="increment"
            handleClick={this.incrementScore}
          />
          <Button
            buttonText="-"
            buttonStyle="decrement"
            handleClick={this.decrementScore}
          />
          <Button
            buttonText="clear"
            buttonStyle="clear"
            handleClick={this.clearScore}
          />
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
