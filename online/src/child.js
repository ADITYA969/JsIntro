import React from 'react'
//Redux,useCOntent
function Child({ChildToParent,counter}) {
    
  return (
    <div>
       <button onClick={()=>{ChildToParent(counter+1)}}>Increment</button>
       <button onClick={()=>{ChildToParent(counter-1)}}>Decrement</button>
    </div>
  )
}

export default Child