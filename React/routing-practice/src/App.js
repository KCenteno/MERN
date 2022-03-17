import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Color from './views/Color';
import Home from './views/Home';
import Thing from './views/Thing';

function App() {
  return (
    <div className="App">
      <Switch>

      <Route exact path="/home">
        <Home/>
      </Route>

      <Route exact path="/:thing">
        <Thing/>
      </Route>

      <Route exact path="/:thing/:color/:backgroundColor">
        <Color/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
