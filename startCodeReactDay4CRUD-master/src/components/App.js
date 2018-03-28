import React from 'react';
import '../styles/App.css';
import AddEditPerson from "./AddEditPerson"
import AllPersons from "./AllPersons"

class App extends React.Component {

  constructor() {
    super();
    this.state= {persons: []}
  }

  async componentDidMount() {
    //This would be the perfect place to fetch persons from the API
    let data = await this.props.DataFacade.getPersons();
    this.setState({
      persons: data
    })
  }

  postPerson = async (person) => {
    await this.props.DataFacade.addPerson(person);
    let data = await this.props.DataFacade.getPersons();
    this.setState({
      persons: data
    })
  }

  deletePerson = async (id) => {
    await this.props.DataFacade.deletePerson(id);
    let data = await this.props.DataFacade.getPersons();
    this.setState({
      persons: data
    })
  }

  render() {
    return (
      <div style={{ margin: 20, width: "70%" }}>
        <h3>CRUD Demo </h3>
        <div className="row">
          <div className="col-md-6">
            <h3>All Persons</h3>
            <AllPersons persons={this.state.persons} deletePerson={this.deletePerson} />
          </div>
          <div className="col-md-6" >
            <h3 style={{textAlign:"center"}}>Add Persons</h3>
            <AddEditPerson postPerson={this.postPerson} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
