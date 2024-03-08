import { useState } from "react"

export default function Counter(){
  const [count,setCount] = useState(0);
  const handleAdd = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const reduceCount = () =>{
    const latestCount = count - 1;
    setCount(latestCount);
  }
  return(
    <div style={{border:'2px solid green'}}>
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
    </div>
  )
}