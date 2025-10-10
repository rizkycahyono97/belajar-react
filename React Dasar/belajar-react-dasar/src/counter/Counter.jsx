import { useState } from 'react';

export default function Counter({ name }) {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>
        Counter {name} {count}
      </h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
