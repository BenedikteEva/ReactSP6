import React, {Component} from 'react';
 class AllJokes extends React.Component { //YELLOW
    render() {
      const list = this.props.jokes.map((j, i) => (<li key={i}>{j}</li>))
        
      return (
        <ul>
          {list}
        </ul>
      );
    }
  }

export default AllJokes;