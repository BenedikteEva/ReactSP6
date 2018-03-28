import React, { Component } from 'react';
import upper, {text1,text2, text3} from "./dataStore1";
import './App.css';
import person from "./dataStore2";
const first = person.firstName;
const email = person.email;

console.log(first);

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <p>{upper(first)}</p>
      <p>{upper(email)}</p>     
      </div>
    );
  }
}
export default App;
