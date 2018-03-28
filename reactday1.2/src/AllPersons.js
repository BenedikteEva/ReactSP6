import React, {Component} from 'react';
 class AllPersons extends React.Component { //YELLOW
    render() {
      const table = this.props.persons.map((person) => (<tr key={person.id}><td>{person.firstName}</td><td>{person.lastName}</td><td>{person.email}</td></tr>))
      return (
        <form>
        <table>
          <thead>
          <tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>
          </thead>
          <tbody>
          {table}
          </tbody>
        </table>
        </form>
      );
    }
  }
export default AllPersons;
