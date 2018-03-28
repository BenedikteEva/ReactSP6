import React, { Component } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.message}</h1>;
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};

    }
    
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      console.log("I am the componentDidMount");
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log("I am the componentWillUnMount");
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
      //console.log("I am the tick");
    }
  
    render() {
      return (
        <div>
          <Welcome message="look at this smart clock" />
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    
  }
  
export default Clock;
