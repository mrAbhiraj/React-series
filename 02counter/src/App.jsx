import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] = useState(15)

  // let counter =  0 ;
 const addValue =()=>{
  console.log("counter digit "  , counter)
  // counter++ ;
  setCounter(counter+1) ;

 }

 const removeValue =()=>{
  console.log("counter digit "  , counter)
  // counter++ ;
  setCounter(counter-1) ;

 }
  return (
    <>
      <h1>Chay or react</h1>
      <h2>counter value {counter}</h2>

      <button onClick = {addValue}>add value</button>
      <br />
      <button  onClick = {removeValue}>remove value</button>
    </>
  )
}

export default App
