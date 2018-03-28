import React, {Component} from 'react';
class AddJokes extends React.Component { //RED
    constructor() {
      super();
      this.state = { newJoke: "" }
    }
    handleChange = (evt) => {
      this.setState({ newJoke: evt.target.value })
    }
    handleSubmit = (evt) => {
      evt.preventDefault();
      this.props.saveJoke(this.state.newJoke);
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.newJoke} onChange={this.handleChange} /><br />
            <button>Save</button>
          </form>
        </div>
      );
    }
  }

export default AddJokes;

  