import React, { Component } from 'react';
import AllJokes from './AllJokes';
import AddJokes from './AddJokes';

import './App.css';


export default class App extends React.Component { //GRAY
  constructor(props) {
    super(props);
    this.state = {
      alljokes: props.JokeStore.getJokes()
    };
  }
  saveJoke = (joke) => {
    this.props.JokeStore.addJoke(joke);
    this.setState({
      alljokes: this.props.JokeStore.getJokes()
    })
  }

  render() {
    return (
      <div className="container row">
         <p>Random Joke: <span> {this.props.JokeStore.getRandomJoke()}</span></p>
      <div className='col1'>
      <p className='head'>Add Joke</p>
      <AddJokes saveJoke={this.saveJoke}/>
      </div>
      <div className='col2'>
      <p className='head'>All Jokes</p>
      <AllJokes jokes={this.state.alljokes}/>
      </div>
      </div>


    );
  }}