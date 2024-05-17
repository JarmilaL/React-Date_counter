import { useState } from 'react';

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleCounting() {}

  return (
    <div>
      <div>
        <button
          onClick={() => setSteps((steps) => (steps > 1 ? steps - 1 : 1))}
        >
          -
        </button>
        <span>Steps: {steps}</span>
        <button onClick={() => setSteps((steps) => steps + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - steps)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + steps)}>+</button>
      </div>

      <div>
        <p>
          {count} days from now is {date.toDateString()}
        </p>
      </div>
    </div>
  );
}
