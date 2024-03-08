import { useEffect, useState } from "react";

export default function Users(){
  const [users, setUsers] = useState([]);
// API ke call korar jonno use effect use kora hoy
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      Users : {users.length}
    </div>
  )
}