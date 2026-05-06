import React, { useState } from 'react';
import './App.css';

function App() {
  // 3. Create a state variable for counter value [cite: 93]
  const [count, setCount] = useState(0);

  // 6. Use event handlers to update state 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>React Counter Application</h1>
      {/* 4. Display the counter value  */}
      <div className="counter-display">
        <p>Current Count: <strong>{count}</strong></p>
      </div>

      {/* 5. Add buttons for increment, decrement, and reset  */}
      <div className="button-group">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
