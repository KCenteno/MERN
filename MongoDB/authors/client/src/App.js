import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import Update from './views/UpdateAuthor';
import One from './views/One';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/Add">
          <NewAuthor/>
        </Route>

        <Route exact path="/:_id">
          <One/>
        </Route>

        <Route exact path="/authors/:_id/update">
          <Update/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
