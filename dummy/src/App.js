import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");

  function changeHandler(e) {
    console.log(text);
    setText(e.target.value);
  }

  return (
    <div className='App'>
      <input type="text" onChange={changeHandler}>

      </input>
    </div>
  );
}

export default App;
