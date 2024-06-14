import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  // let counter = 15
  const addVal = ()=>{
    if(counter < 20){

      counter = counter + 1
      setCounter(counter)
    }
  }
  const removeVal = () =>{
    if(counter > 0){

      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>HEY This is Hook Tutorial {counter}</h1>
     <h2>The Counter Value is equal to : {counter}</h2>
     <button onClick={addVal}>ADDValue {counter}</button>
     <button onClick={removeVal}>REMOVEvalue{counter}</button>

     <footer>Footer{counter}</footer>
     
    </>
  )
}

export default App
