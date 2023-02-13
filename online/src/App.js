import React, { useState } from 'react'
import Child from './child'
function App() {
  const [counter,setCounter]=useState(0);
  const ChildToParent=(value)=>{
    setCounter(value)
  }
  return (
    <div>
     
     <h1 style={{marginLeft:80}}> {counter}</h1>
      <Child ChildToParent={ChildToParent} counter={counter}/>
      
    </div>
  )
}

export default App