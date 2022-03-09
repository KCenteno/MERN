import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard last_name="Doe" first_name="Jane" age={45} haircolor="Black"/>
      <PersonCard last_name="Smith" first_name="John" age={88} haircolor="Brown"/>
      <PersonCard last_name="Fillmore" first_name="Millard" age={50} haircolor="Brown"/>
      <PersonCard last_name="Smith" first_name="Maria" age={62} haircolor="Brown"/>
    </div>
  );
}

export default App;
