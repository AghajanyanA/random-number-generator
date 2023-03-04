import { useState } from 'react';
import './App.css';

function App() {
  const [textValue, setTextValue] = useState(1)
  const [numbers, setNumbers] = useState([])
  const ifNumbersNotEmpty = numbers.length !== 0 ? true : false
  const latestNumber = ifNumbersNotEmpty ? numbers[numbers.length -1] : undefined
 
  const numberRandomizer = function() {
    const num = []
    for (let i = 1; i <= textValue; i++) {
      const number = Math.floor(Math.random() * 10)
      num.push(number)
    }
    setNumbers(prev => [...prev, num])
  }
  
  const handleInputChange = function(e) {
    if (isFinite(e.target.value) && e.target.value <= 10) { 
      setTextValue(e.target.value)
    }
  }
  
  const handleUndoButton = function() {
    setNumbers(numbers => numbers.slice(0, numbers.length - 1))
  }
  
  return (
    <div className="App">
      <div id='number'>     
        { latestNumber }
      </div>
      <div>
        <p id='prompt-text'>I need a <input id='numbers-input' type='text' value={textValue} onChange={handleInputChange} /> digit number</p>
      </div>
      <div id='buttons'>
        <button type='submit' onClick={numberRandomizer}>Gimme number!</button>
        <button onClick={handleUndoButton}>Undo</button>
      </div>
      <div id='history'>
          { numbers.map((item, index) => <div key={index}>{item}</div>) }
      </div>
    </div>
  );
}

export default App;
