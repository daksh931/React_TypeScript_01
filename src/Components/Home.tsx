import {ReactNode } from "react"

type Hometype ={
    name: string,
    age?: number,
    add:()=> void,
    children : ReactNode,
}

const Home = (props : Hometype) => {
  props.add()
  
    return (
    <>
     <div>
        <p>Hello World</p>
        <h5>Name is {props.name}</h5>
        <h5>Age is {props.age}</h5>
        {props.children}
    </div> 
    </>
  )
}

export default Home
