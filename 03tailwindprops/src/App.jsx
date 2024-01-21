import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "abhishek" ,
    age: 22
  }

  let newArr = [1,2,3,4]
  return (
    <>
    <Card username = "Abhi" btnTxt = "click me" />
    <Card username = "raj" />

    </>
  )
}

export default App
