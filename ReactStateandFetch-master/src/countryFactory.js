//Add imports here
import React, {
  Components
} from 'react';

function makeOptions(type, data) {
  return {
    method: type,
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

class CountryFactory {

  constructor() {}

  async getLabels() {
    return await fetch("http://localhost:3333/labels").then(Response => Response.json());
  }

  async getCountries() {
    return await fetch("http://localhost:3333/countries").then(Response => Response.json());
  }

}

export default new CountryFactory();