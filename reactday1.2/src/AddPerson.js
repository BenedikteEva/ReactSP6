import React, {Component} from 'react';
class AddPerson extends React.Component { //RED
    constructor() {
      super();
      this.state = { newPerson: [{
        id: "",
        firstName: "",
        lastName: "",
        email: ""
      }] }
    }

    handleChange = (evt) => {
      const target = evt.target;
      const prop = target.id;
      var value = target.value;
      var person = this.state.newPerson;
      person[prop] = value;
      this.setState({
      newPerson : person
    });
    }

    handleSubmit = (evt) => {
      evt.preventDefault();
      this.props.savePerson(this.state.newPerson);
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input id="id" value={this.state.newPerson.id} onChange={this.handleChange} /><br />
            <input id="firstName" value={this.state.newPerson.firstName} onChange={this.handleChange} /><br />
            <input id="lastName" value={this.state.newPerson.lastName} onChange={this.handleChange} /><br />
            <input id="email" value={this.state.newPerson.email} onChange={this.handleChange} /><br />
            <button>Save</button>
          </form>
        </div>
      );
    }
  }

export default AddPerson;

  