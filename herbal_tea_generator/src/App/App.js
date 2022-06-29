import './App.css';
import TeaDisplay from '../TeaDisplay/TeaDisplay';


function App() {
  return (
    <div className="App">
    <h1>Herbal Tea Randomiser!</h1>
    <h3>Click here for a random tea, complete with information about its uses.</h3>
    <button>Show me a tea!</button>
    <TeaDisplay/>
    </div>
  );
}

export default App;
