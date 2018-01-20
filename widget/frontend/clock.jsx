import React from 'react';
import ReactDOM from 'react-dom';



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time:new Date()};
  }


  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  printTime() {
    let hours = this.state.time.getHours() % 12;
    let mins = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return `${hours}:${mins}:${seconds}`;
  }

  printDate() {
    return this.state.time.toDateString();
  }




  render() {
    return (
    <div className="clock">
    <h1>Time: {this.printTime()}</h1>
    <h1>Date: {this.printDate()}</h1>
    </div>
    );
  }
}



export default Clock;
