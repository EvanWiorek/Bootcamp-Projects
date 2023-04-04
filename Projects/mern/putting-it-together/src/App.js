import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

const peopleArr = [
  { "firstName" : "Jane", "lastName" : "Doe", "age" : 45, "hairColor" : "Black"},
  { "firstName" : "John", "lastName" : "Smith", "age" : 88, "hairColor" : "Brown"}
]

//below function iterates through every object in the peopleArr array, and maps them.
function App() {
  return (
    <div className="App">
    {peopleArr.map(person => {
      return <>
      <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      </>
    })
    }
    </div>
  );
}

/*

the above could also be written as:
<div className="App">
  <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
  <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
  <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
  <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
</div>

*/

export default App;
