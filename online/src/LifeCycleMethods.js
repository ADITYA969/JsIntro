import React,{useEffect, useState} from 'react'
import axios from "axios"
function LifeCycleMethods() {
    const [data,setData]=useState(null);
    //https://jsonplaceholder.typicode.com/users
    useEffect(()=>{
        asyncFunctionCall();
    },[])
    const asyncFunctionCall =async ()=>{
            // const response =await axios.get("https://jsonplaceholder.typicode.com/users");
            const resJson =await fetch("https://jsonplaceholder.typicode.com/users")
            const response=await resJson.json();
             console.log(response);
            setData(response)
    }
  return (
    <div>
    {data?.map((item)=><h1>{item.name}</h1>)}
    </div>
  )
}

export default LifeCycleMethods