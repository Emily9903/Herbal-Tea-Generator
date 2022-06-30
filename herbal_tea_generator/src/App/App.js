import './App.css';
import TeaDisplay from '../TeaDisplay/TeaDisplay';
import {useState} from "react";

function App() {
  
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(true);
  }

  return (
    <div>
    <h1 className="h1">Herbal Tea Randomiser!</h1>
    <h3 className="h3">Click here for a random tea, complete with information about its uses.</h3>
    <button className="button" onClick={handleClick}>Click Here!</button>
    {isShown && <TeaDisplay/>}
    </div>
  );
  }

export default App;
