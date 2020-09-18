import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  constructor(props) {
      super(props)
  
      this.state = {
           count: 0
      }
  }
    render() {
        const {count} = this.state;
        return (
            <div>
                <Clock timeInSeconds={count}/>
                <CountdownForm onSetCountdownTime={val=>this.setState({count:val})}/>
            </div>
        );
    }
}

export default Countdown;