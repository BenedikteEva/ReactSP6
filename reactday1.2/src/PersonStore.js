class PersonStore {
    constructor() {
       this._persons = [
        {
            id : '1',
            firstName : "Lebron",
            lastName : "James",
            email : "LebronJames@nba.com"
        },
        {
            id : '2',
            firstName : "Christiano",
            lastName : "Ronaldo",
            email : "CR7@football.com"
        }
       ];
    }

    addPerson(person) {
      this._persons.push(person);
    }

    getPersons() {
      return this._persons;
    }
  }
  
  export default new PersonStore();
  