import React, {Component} from 'react';
export default class NewFile extends React.Component {
  
    constructor(){
      super()
      this.addNewRow = this.addNewRow.bind(this);
      this.state = {
        rules:[
          "age must be above 10",
          "must wear shoe"
        ]
      }
    }
    
    addNewRow(e){
      let updated = this.state.rules.slice();
      updated.push("");
      this.setState({rules:updated});
    }
      
    
    render() {
      return (
        <div>
          {this.state.rules.map(obj => 
             <input type="text" defaultValue={obj} />
           )}
           <button onClick={this.addNewRow}>Add New Rules</button>
           <br /><br />
           <pre>{JSON.stringify(this.state.rules,null,2)}</pre>
         </div>
      );
    }
  }