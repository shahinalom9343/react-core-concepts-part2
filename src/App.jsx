
import './App.css'
import Counter from './Count';
import Play from './Play';
import Users from './Users';
import Friends from './Friends';
function App() {
  function handleClick(){
    alert("Button Clicked");
  }
  function AddToFive(number){
    alert(number+5);
  }
  return (
    <>
      <h2>React Core Concepts Part 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Play></Play>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      {/* Vejailla */}
      <button onClick={() => AddToFive(4)}>Add 5</button>
    </>
  )
}

export default App
