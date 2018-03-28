import React, { Component } from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  export default function App() {
    return (
      <div>
        <Welcome name="Kurt" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
 
