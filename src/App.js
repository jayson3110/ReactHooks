import React, {useState} from 'react';
import Hero from './components/Hero';


function App() {
  // body...

  const [count, setCount] = useState(0);
  
  const handleHeroClick = () => {

  }

  return(
    <div className="app">
       <h1>React Hooks</h1>

       <p>{count}</p>

       <button onClick={() => setCount(count + 1)}>Increase </button>

       <Hero name="JaysonRigHere" onClick={handleHeroClick}/>




    </div> 
  )
}

export default App;