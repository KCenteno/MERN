import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import People from './views/People';
import Planet from './views/Planet';

function App() {
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    history.push(`/${category}/${detail}`);
  }

  return (
    <div className="App">
      <div className="navBar">
        <form onSubmit={submitHandler}>
          <h5>Search for</h5> 
          <select className="form-select w-25 d-inline-block" onChange={(event)=>setCategory(event.target.value)}>
            <option>people</option>
            <option>planets</option>
          </select>
          <h5>ID</h5> 
          <input type="text" className='form-control w-25 d-inline-block' onChange={(event)=>setDetail(event.target.value)}/>
          <input type="submit" className='btn btn-primary'/>
        </form>
      </div>
      <Switch>
        <Route exact path={"/people/:detail"}>
          <People/>
        </Route>
        <Route exact path={"/planets/:detail"}>
          <Planet/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
