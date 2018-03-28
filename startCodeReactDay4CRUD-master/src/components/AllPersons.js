import React from "react";

export default class AllPersons extends React.Component {

  onDelete = (event) => {
    let id = event.target.id;
    this.props.deletePerson(id);
  }

  render(){
    const persons = this.props.persons;
    const data = this.props.persons.map(person => <tr key={person.id}><td>{person.age}</td><td>{person.name}</td><td>{person.gender}</td><td>{person.email}<a onClick={this.onDelete} id={person.id}>(Delete)</a>
    </td></tr>)
    return (
      <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      <p>And update me when new are added </p>
    </div>
    )
  }
}
