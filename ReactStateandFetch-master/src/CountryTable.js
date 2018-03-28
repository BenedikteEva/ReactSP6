import React, { Component } from "react";

class CountryTable extends Component {
  constructor(){
    super();
  }
  lengthOfArray (props) {
    if(props.length === 1) {
      return "";
    }
    return "(+" + props.length + ")";
  }
  render() {
    const label = this.props.labels;
    const labelsRow = <tr key={label.area}><td>{label[0]}</td><td>{label[1]}</td><td>{label[2]}</td><td>{label[3]}
    </td><td>{label[4]}</td><td>{label[5]}</td><td>{label[6]}</td><td>{label[7]}</td><td>{label[8]}</td><td>{label[9]}</td></tr>;
    const countriesRow = this.props.countries.map(country => <tr key={country.area}><td>{country.name}</td><td>{country.capital}</td><td>{country.region}</td><td>{country.population}
    </td><td>{country.area}</td><td>{country.timezones[0]}{this.lengthOfArray(country.timezones)}</td><td>{country.borders[0]}{this.lengthOfArray(country.borders)}</td><td>{country.topLevelDomain[0]}{this.lengthOfArray(country.topLevelDomain)}</td><td>{country.currencies[0]}{this.lengthOfArray(country.currencies)}</td><td>{country.languages[0]}{this.lengthOfArray(country.languages)}</td></tr>)
  
    return (
      <table className="table">
        <thead>
             {labelsRow}
        </thead>
        
        <tbody>
      {countriesRow}
        </tbody>
      </table>
    );
  }
}
export default CountryTable;