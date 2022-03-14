import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import Box from './components/Box';

function App(props) {
  const [box, setBox] = useState([]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newState = [...box, form];
    setBox(newState);

    setForm("");
  }

  return (
    <div className="App">
      <h1>Colors</h1>
      <form onSubmit={onSubmitHandler}>
        <input value={form} onChange={(event)=>{setForm(event.target.value)}} type="text" className="w-50 mx-auto form-control"/>
        <input type="submit" className='btn btn-primary btn-lg d-block mx-auto my-2'/>
      </form>
    <div className='d-flex'>
      {
        box.map((item,i)=>{
          return <Box key={i} name={item}/>
        })
      }
    </div>
    </div>
  );
}

export default App;
