import React, { useState } from 'react'
import Child from './child'
import Moviecard from './Moviecard';
import "./App.css"
function App() {
  const [counter,setCounter]=useState(0);
  const ChildToParent=(value)=>{
    setCounter(value)
  }
  return (
    <div className='container'>
     
     {/* <h1 style={{marginLeft:80}}> {counter}</h1> */}
      {/* <Child ChildToParent={ChildToParent} counter={counter}/> */}\
      <Moviecard title="Bahubhali" producer="prasad" rating="4"/>
      <Moviecard title="KGF" producer="prasad" rating="3"/>
      <Moviecard title="RRR" producer="prasad" rating="4"/>

    </div>
  )
}

export default App