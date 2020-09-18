import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeInSec: 0,
    };
  }

  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
  startTimer = () => {
    const { timeInSeconds } = this.props;
    this.clock = setInterval(() => {
      this.setState({
        timeInSec: this.state.timeInSec - 1,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(this.clock);
    }, timeInSeconds * 1000);
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.timeInSeconds !== prevProps.timeInSeconds &&
      this.state.timeInSec === 0
    ) {
      this.setState({ timeInSec: this.props.timeInSeconds });
      this.startTimer();
    }
  }

  render() {
    const { timeInSec } = this.state;
    // var {timeInSeconds} = this.props;
    //Keep the classes name. Try to inject your code and do not remove existing code
    return (
      <div
        className="clock"
        style={{
          fontSize: "20px",
          fontFamily: "emoji",
          fontWeight: "600",
          padding: "10px",
        }}
      >
        <span className="clock-text">{this.formatTime(timeInSec)}</span>
      </div>
    );
  }
}

export default Clock;
