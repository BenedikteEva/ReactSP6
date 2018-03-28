const URL = "http://localhost:3456/api";

//Simple way to handle HTTP-errors which otherwise does not throw an exception with the fetch-API
function handleHttpErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}

function makeOptions (type, data) {
  return {
    method: type,
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

class DataFacade {
  
  /*
  OBSERVE-1: This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketche in the example below*/
  async getPersons () {
    return await fetch(URL).then(Response =>  Response.json());
  }

  async addPerson (person){
     await fetch(URL, makeOptions("POST", person));
  }

  async deletePerson(id){
    await fetch(URL + "/" + id, makeOptions("DELETE"));
  }
  

 }

export default new DataFacade();