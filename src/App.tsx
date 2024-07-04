import './App.css'
import Home from './Components/Home'

function App() {

  return (
    <>
    <Home name={'abcd'} age={1} add={()=>{console.log('object1')}} >
      <button>Click here!</button>
    </Home>
    </>
  )
}

export default App
