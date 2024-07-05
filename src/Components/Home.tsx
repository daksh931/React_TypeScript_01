
import { Dispatch, SetStateAction } from "react";

type InputValType = string | number;

const Home = <T extends InputValType> (
  props:{
    value?: T,
    setter: Dispatch<SetStateAction<T>>} // Dispatch<SetStateAction<>> is dType of a variable in useState() hook 
  ) =>{
  return(
  <>
  <form>
    <input type="text" value={props.value}   onChange={(e)=>props.setter(e.target.value as T)} />
    <button type="submit"> Submit</button>
  </form>
  </>
  )
}
 
// simple use of children, functions and string,number dtypes in react with typescript use of props...
// type Hometype ={
//     name: string,
//     age?: number,
//     add:()=> void,
//     children : ReactNode,
// }

// const Home = (props : Hometype) => {
//   props.add()
  
//     return (
//     <>
//      <div>
//         <p>Hello World</p>
//         <h5>Name is {props.name}</h5>
//         <h5>Age is {props.age}</h5>
//         {props.children}
//     </div> 
//     </>
//   )
// }

export default Home
