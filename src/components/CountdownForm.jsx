import React from "react";
import '../App.css';

class CountdownForm extends React.Component {
  onSubmit = (e, timeAdded) => {
    //This will give you string for seconds. Do not remove refs
    e.preventDefault();
    this.props.onSetCountdownTime(timeAdded);
  };

  render() {
    return (
      <div>
        <form
          ref="form"
          onSubmit={(e) => {
            var secondsStr = this.refs.seconds.value.trim();
            const timeAdded = parseInt(secondsStr);
            if (timeAdded >= 0) this.onSubmit(e, timeAdded);
            else e.preventDefault();
          }}
          className="countdown-form form-body"
        >
          <input
            type="text"
            ref="seconds"
            className="enter-text"
            placeholder="Enter time in seconds"
          />
          <input
            type="submit"
            className="button"
            value="Start Countdown"
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
