import './Friend.css'
export default function Friend({friend}){
  const {name,email} =friend;
  return (
    <div className='inner-box'>
      <h3>Name : {name}</h3>
      <p>E-mail : {email}</p>
    </div>
  )
}