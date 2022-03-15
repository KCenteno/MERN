import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoList text={"To Do List!!"}/>
    </div>
  );
}

export default App;
