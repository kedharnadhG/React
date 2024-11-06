import { useState, useRef } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import Parent from "./components/Parent";

function App() {

    const [name, setName] = useState('Steve')

    const refElement = useRef('')
    console.log(refElement)

    const clear = () =>{
      setName('')
      refElement.current.focus()
    }
    
    const changeColor = () =>{
      refElement.current.style.color = 'red'
    }

    return (

      <>
        <h1>useRef</h1>
        <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={clear}>Clear</button>
        <button onClick={changeColor}>Change Color</button>
      
      </>

    )

      // return <Parent/>
      // return <Counter/>
}

export default App;
