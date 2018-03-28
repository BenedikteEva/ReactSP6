import React, { Component } from 'react';
import AllPersons from './AllPersons';
import AddPerson from './AddPerson';

import './App.css';

export default class App3 extends React.Component { //GRAY
  constructor(props) {
    super(props);
    this.state = {
      allPersons: props.PersonStore.getPersons()
    };
  }
  savePerson = (person) => {
    this.props.PersonStore.addPerson(person);
    this.setState({
      allPersons: this.props.PersonStore.getPersons()
    })
  }

  render() {
    return (
      <div>
        <div className='col1'>
          <p className='head'>Add Person</p>
          <AddPerson savePerson={this.savePerson} />
        </div>
        <div className='col2'>
          <p className='head'>All Persons</p>
          <AllPersons persons={this.state.allPersons} />
        </div>
        <div>
          <p> Total Persons: {this.state.allPersons.length}</p>
        </div>
      </div>


    );
  }
}