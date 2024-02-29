import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [name, setName] = useState("Chinz");

  //it will execute after every "render"
  //VARIATION-1
  // useEffect(() => {
  //   console.log("UI rendering Done");
  // })

  //Variation-2 -- this useEffect will run only for once when the App component will run for the first time

  // THIS is because we are using a dependency array here.
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // }, []);

  //variation - 3
  // this will run after every time the dependency changes

  // useEffect(() => {
  //   console.log("Change Observed");
  // }, [name]);


  //Variation-4
  useEffect(() => {
    console.log("listener added");
    return () => {
      console.log("listener removed");
    }
  }, [text]);

  
  function changeHandler(e) {
    console.log(text);
    setText(e.target.value);
    // setName(e.target.value)
  }

  return (
    <div className='App'>
      <input type="text" onChange={changeHandler}>

      </input>
    </div>
  );
}

export default App;
