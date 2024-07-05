import { useState } from 'react'
import './App.css'
import Home from './Components/Home'

function App() {
  const [val,setVal] = useState<string>("");
  return (
    <>
    <Home  value={val} setter={setVal} >
      {/* <button>Click here!</button> */}
    </Home>
    </>
  )
}

export default App
