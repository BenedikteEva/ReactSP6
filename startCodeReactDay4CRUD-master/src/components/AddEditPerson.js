import React, {Component} from "react"

export default class AddEditPerson extends Component {
  constructor() {
    super();
    this.state = {
      person: {id: "", name: "", age: "", email: "", gender: ""}
    }
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    const person = this.state.person;
    this.props.postPerson(person);
  }

  handleInput = (event) => {
    const target = event.target;
    const prop = target.id;
    var value = target.value;
    var person = this.state.person;
    person[prop] = value;
    this.setState({
      person : person
    });
  }

  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input className="form-control" readOnly id="id" name="id" value={this.state.person.id} onChange={this.handleInput}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input className="form-control" id="name" name="name" placeholder="Enter Name" value={this.state.person.name} onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Age:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" name="age" id="age" placeholder="Enter age" value={this.state.person.age} onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="email">Email:</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={this.state.person.email} onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Gender:</label>
            <div className="col-sm-9">
              <input className="form-control" id="gender" name="gender" placeholder="Enter Gender" value={this.state.person.gender} onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
        <p>Please provide me with the ability to create new persons</p>
        <p>And update the backend when submitted</p>
      </div>
    )
  }
}