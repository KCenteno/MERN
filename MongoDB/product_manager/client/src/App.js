import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Form from './components/Form';
import Create from './components/Create';
import SingleProduct from './components/SingleProduct';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
        <Switch>
          
          <Route exact path="/">
            <Form/>
          </Route>

          <Route exact path="/:_id">
            <SingleProduct/>
          </Route>

          <Route exact path="/products/create">
            <Create/>
          </Route>

          <Route exact path ="/products/:_id/update">
            <Update/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
