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

  function handleReset() {
    setCount(0);
    setSteps(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(event) => setSteps(Number(event.target.value))}
        />
        <span>Steps: {steps}</span>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - steps)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />

        <button onClick={() => setCount((count) => count + steps)}>+</button>
      </div>

      <div>
        <p>
          {count} days from now is {date.toDateString()}
        </p>
      </div>

      {count !== 0 || steps > 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
