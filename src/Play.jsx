import { useState } from "react";

export default function Play(){
  const [count,SetCount] = useState(11);
  const playStyle = {
    border:'2px solid red',
    margin : '10px',
    padding : '10px',
    borderRadius : '7px'
  }
  const handleAdd = () =>{
    SetCount(count + 1);
  }
  const handleRemove = () =>{
    SetCount(count - 1);
  }
  return (
    <div style={playStyle}>
      <h3>Players : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}